import { useState } from "react";

export const ChatInput = ({ createMsg, lastId }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    message &&
      createMsg({
        author: "user",
        msg: message,
        id: ++lastId,
      });
    setMessage("");
  };

  return (
    <form className="chat__form">
      <input
        className="chat__input"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* <input className="chat__file" type="file"/> */}
      <button className="chat__btn" type="submit" onClick={sendMessage}>
        send
      </button>
    </form>
  );
};
