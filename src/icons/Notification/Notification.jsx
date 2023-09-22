/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Notification = ({ className }) => {
  return (
    <svg
      className={`notification ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 57 56"
      width="57"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="white" height="52" rx="3" width="52" y="3.10352" />
      <path
        className="path"
        d="M26 23.5435V26.8735"
        stroke="#ADA7A7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M26.02 19.1035C22.34 19.1035 19.36 22.0835 19.36 25.7635V27.8635C19.36 28.5435 19.08 29.5635 18.73 30.1435L17.46 32.2635C16.68 33.5735 17.22 35.0335 18.66 35.5135C23.44 37.1035 28.61 37.1035 33.39 35.5135C34.74 35.0635 35.32 33.4835 34.59 32.2635L33.32 30.1435C32.97 29.5635 32.69 28.5335 32.69 27.8635V25.7635C32.68 22.1035 29.68 19.1035 26.02 19.1035Z"
        stroke="#ADA7A7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M29.33 35.9235C29.33 37.7535 27.83 39.2535 26 39.2535C25.09 39.2535 24.25 38.8735 23.65 38.2735C23.05 37.6735 22.67 36.8335 22.67 35.9235"
        stroke="#ADA7A7"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <circle className="circle" cx="52" cy="5" fill="#FFBC0F" r="5" />
    </svg>
  );
};
