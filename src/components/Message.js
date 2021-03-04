import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { useState, useRef } from "react";

export const Message = ({ message, editMsg, deleteMsg }) => {
  const [editedMsg, setEditedMsg] = useState(message.msg);

  const text = useRef(null);
  const form = useRef(null);

  return (
    <div className="chat__message">
      <div className="message__user_img"></div>
      <div className="message__wrap">
        <span className="message__author">{message.author}</span>
        <p className="message__text" ref={text}>
          {message.msg}
        </p>

        <form className="message__edit_form hidden" ref={form}>
          <input
            value={editedMsg}
            onChange={(e) => {
              setEditedMsg(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              editMsg(e, message.id, editedMsg);
              text.current.classList.toggle("hidden");
              form.current.classList.toggle("hidden");
            }}
          >
            change
          </button>
        </form>

        <div className="message__controllers">
          <button
            className="message__edit"
            onClick={() => {
              text.current.classList.toggle("hidden");
              form.current.classList.toggle("hidden");
            }}
          >
            <MdModeEdit />
          </button>
          <button
            className="message__delete"
            onClick={() => deleteMsg(message.id)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};
