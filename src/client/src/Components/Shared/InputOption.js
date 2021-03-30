import React from "react";
import "./InputOption.css";

export default function InputOption({ title, link }) {
  return (
    <div className="inputOption">
      {/* If we received the value "Icon" */}

      <a href={link}>{title}</a>
    </div>
  );
}
