import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-light text-dark py-5">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-3 mb-4 mb-md-0">
              <a
                href="https://flowbite.com/"
                class="d-flex align-items-center text-decoration-none">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="FlowBite Logo"
                  height="32"
                  class="me-2"
                />
                <span class="fs-4 fw-semibold">Flowbite</span>
              </a>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-6 col-sm-4 mb-4">
                  <h5 class="text-uppercase mb-3">Resources</h5>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        href="https://flowbite.com/"
                        class="text-muted text-decoration-none">
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        class="text-muted text-decoration-none">
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-sm-4 mb-4">
                  <h5 class="text-uppercase mb-3">Follow us</h5>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        href="https://github.com/themesberg/flowbite"
                        class="text-muted text-decoration-none">
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        class="text-muted text-decoration-none">
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-sm-4 mb-4">
                  <h5 class="text-uppercase mb-3">Legal</h5>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="text-muted text-decoration-none">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-muted text-decoration-none">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <span class="text-muted text-center text-sm-start">
              © 2023{" "}
              <a href="https://flowbite.com/" class="text-decoration-none">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <div class="d-flex justify-content-center justify-content-sm-end mt-3 mt-sm-0">
              <a href="#" class="text-muted me-3">
                <i class="bi bi-facebook"></i>
                <span class="visually-hidden">Facebook page</span>
              </a>
              <a href="#" class="text-muted me-3">
                <i class="bi bi-discord"></i>
                <span class="visually-hidden">Discord community</span>
              </a>
              <a href="#" class="text-muted me-3">
                <i class="bi bi-twitter"></i>
                <span class="visually-hidden">Twitter page</span>
              </a>
              <a href="#" class="text-muted me-3">
                <i class="bi bi-github"></i>
                <span class="visually-hidden">GitHub account</span>
              </a>
              <a href="#" class="text-muted">
                <i class="bi bi-dribbble"></i>
                <span class="visually-hidden">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
