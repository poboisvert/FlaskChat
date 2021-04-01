import React, { useEffect, useState } from "react";
import "./SidebarContent.css";
import { Avatar } from "@material-ui/core";

export default function SidebarContent({ id, name, addNewChat, url }) {
  const [text, setText] = useState("");
  useEffect(() => {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return setText(text);
  }, []);

  const createChat = () => {
    const roomName = prompt("Please type a name");

    if (roomName) {
      // Action
    }
  };

  return !addNewChat ? (
    <a href={url}>
      <div className="SidebarChat">
        <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${text}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </a>
  ) : (
    <div onClick={createChat} className="SidebarChat">
      <h2>Add New Aggregation</h2>
    </div>
  );
}
