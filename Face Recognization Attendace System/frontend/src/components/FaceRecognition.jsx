import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const FaceRecognition = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.userId);
      } catch (error) {
        console.error("❌ Token Decode Error:", error);
      }
    }
  }, []);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("❌ Camera Error:", error);
      }
    };

    if (isCameraOn) startCamera();
    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isCameraOn]);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, 400, 300);

      const imageUrl = canvasRef.current.toDataURL("image/png");
      setCapturedImage(imageUrl);

      canvasRef.current.toBlob((blob) => processFace(blob), "image/png");
    }
  };

  const processFace = async (imageBlob) => {
    try {
      console.log("📸 Image Captured for User:", userId);
      await markAttendance();
    } catch (error) {
      console.error("❌ Processing Error:", error);
    }
  };

  const markAttendance = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("❌ No token found! Please log in.");
        return;
      }

      const response = await axios.post(
        "https://2t4qcj-5000.csb.app/api/attendance/mark",
        { userId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      response.status === 201
        ? alert("✅ Attendance marked successfully!")
        : alert("❌ Error marking attendance!");
    } catch (error) {
      console.error("🚨 API Error:", error);
      alert("❌ Error marking attendance.");
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow border-0 rounded-4">
        {/* Header */}
        <div className="card-header bg-primary text-white text-center">
          <h2 className="h4 mb-0">Face Recognition Attendance System</h2>
          <p className="small mt-1 mb-0">Quick and secure attendance marking</p>
        </div>

        {/* Body */}
        <div className="card-body">
          {/* Video Container */}
          <div className="position-relative mb-4 border rounded-3 overflow-hidden bg-light">
            <video
              ref={videoRef}
              autoPlay
              className="w-100"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <canvas
              ref={canvasRef}
              width="400"
              height="300"
              className="d-none"
            />

            {!isCameraOn && (
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                <div className="bg-white p-3 rounded-3 shadow-sm">
                  <p className="mb-0 text-muted">Camera is currently offline</p>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <button
              className="btn btn-primary px-4 py-2"
              onClick={() => setIsCameraOn(true)}
              disabled={isCameraOn}>
              Start Camera
            </button>
            <button
              className="btn btn-danger px-4 py-2"
              onClick={() => setIsCameraOn(false)}
              disabled={!isCameraOn}>
              Stop Camera
            </button>
            <button
              className="btn btn-success px-4 py-2"
              onClick={captureImage}
              disabled={!isCameraOn || !userId}>
              Capture & Mark
            </button>
          </div>

          {/* Captured Image Display */}
          {capturedImage && (
            <div className="text-center">
              <h5 className="mb-3">Captured Image</h5>
              <div className="border rounded-3 d-inline-block shadow-sm p-2 bg-white">
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="img-fluid rounded"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="card-footer text-muted text-center small">
          Make sure your face is clearly visible in the camera
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
