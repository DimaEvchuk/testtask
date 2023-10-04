import React from "react";
import "./QA.css";
import Poster from "./Poster/Poster.jsx";


const QA = () => {
  return (
    <div>
    <div className="qa">
      <div className="titleQA">Q&A</div>
      <div>
        <div className="calendar">
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8443 1.34442H9.85272V0.612428C9.85272 0.316686 9.61318 0.0771484 9.31744 0.0771484C9.02169 0.0771484 8.78216 0.316686 8.78216 0.612428V1.34442H5.20917V0.612428C5.20917 0.316686 4.96963 0.0771484 4.67389 0.0771484C4.37814 0.0771484 4.13861 0.316686 4.13861 0.612428V1.34442H3.15369C1.7352 1.34442 0.583008 2.49795 0.583008 3.9151V9.35221C0.583008 10.7694 1.73653 11.9229 3.15369 11.9229H10.8457C12.2642 11.9229 13.4163 10.7694 13.4163 9.35221V3.9151C13.4163 2.49661 12.2628 1.34442 10.8443 1.34442ZM3.15369 2.41498H4.13861V3.14698C4.13861 3.44272 4.37814 3.68226 4.67389 3.68226C4.96963 3.68226 5.20917 3.44272 5.20917 3.14698V2.41498H8.78216V3.14698C8.78216 3.44272 9.02169 3.68226 9.31744 3.68226C9.61318 3.68226 9.85272 3.44272 9.85272 3.14698V2.41498H10.8443C11.6713 2.41498 12.3444 3.0881 12.3444 3.9151V4.45306H1.65223V3.9151C1.65223 3.0881 2.32534 2.41498 3.15369 2.41498ZM10.8443 10.8537H3.15235C2.32534 10.8537 1.65223 10.1806 1.65223 9.35355V5.52362H12.3458V9.35221C12.3458 10.1806 11.6727 10.8537 10.8443 10.8537Z"
              fill="#F2F1F3"
              fill-opacity="0.5"
            />
          </svg>
          <p>Mar, 23</p>
        </div>
      </div>
    </div>
    <Poster />
    </div>
  );
};

export default QA;
