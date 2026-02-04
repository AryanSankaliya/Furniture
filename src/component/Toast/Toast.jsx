import React from "react";
import "./Toast.css";

function Toast({ className = "", children }) {
  return (
    <div className={`toast ${className}`}>
      {children}
    </div>
  );
}

export default Toast;
