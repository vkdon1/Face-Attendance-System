import React, { useEffect, useState } from "react";

const AttendanceList = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("❌ No token found in localStorage");
      return;
    }

    console.log("🔑 Retrieved Token:", token);

    fetch("https://2t4qcj-5000.csb.app/api/attendance", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("Response Status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("📜 API Response Data:", data);
        if (data) {
          setAttendance(data.info);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching attendance:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Attendance Records</h2>
      {loading ? (
        <p>Loading...</p>
      ) : attendance.length > 0 ? (
        <table class="table" border="10">
          <thead>
            <tr class="table-success">
              <th>User ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record) => (
              <tr key={record._id}>
                <td class="table-info">{record.userId}</td>
                <td class="table-info">
                  {new Date(record.timestamp).toLocaleDateString()}
                </td>
                <td class="table-info">
                  {new Date(record.timestamp).toLocaleTimeString()}
                </td>
                <td
                  class="table-info"
                  style={{ color: "Green", fontWeight: "bolder" }}>
                  Present
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No attendance records found.</p>
      )}
    </div>
  );
};

export default AttendanceList;
