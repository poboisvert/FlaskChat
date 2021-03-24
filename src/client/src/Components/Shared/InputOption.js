import React from "react";
import "./InputOption.css";

export default function InputOption({ Icon, title, onClick, link }) {
  return (
    <div onClick={onClick} className="inputOption">
      {/* If we received the value "Icon" */}
      {Icon && <Icon className="inputOption__icon" />}
      <a href={link}>
        <h3 className="inputOption__title">{title}</h3>
      </a>
    </div>
  );
}
