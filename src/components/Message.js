import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { useState } from "react";

export const Message = ({ message, editMsg, deleteMsg }) => {
  const [editedMsg, setEditedMsg] = useState(message.msg);
  const [editMsgFormIsShown, setEditMsgFormIsShown] = useState(false);

  return (
    <div className="chat__message">
      <div className="message__user_img"></div>
      <div className="message__wrap">
        <span className="message__author">{message.author}</span>

        {!editMsgFormIsShown && <p className="message__text">{message.msg}</p>}

        {editMsgFormIsShown && (
          <form className="message__edit_form">
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
                setEditMsgFormIsShown(false);
              }}
            >
              change
            </button>
          </form>
        )}

        <div className="message__controllers">
          <button
            className="message__edit"
            onClick={() => {
              setEditMsgFormIsShown(true);
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
