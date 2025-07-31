import React from "react";

function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811..."></path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - Chaiwat Sasithonratsame</p>
        </div>
        <div className="flex gap-4">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883..."></path>
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604..."></path>
            </svg>
          </a>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
