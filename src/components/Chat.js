import { ChatInput } from "./ChatInput";
import { MessagesList } from "./MessagesList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Chat = ({ db }) => {
  const { chatName } = useParams();

  const [messages, setMessages] = useState(
    localStorage.getItem(chatName)
      ? JSON.parse(localStorage.getItem(chatName))
      : db.find((chat) => chat.chatName === chatName).msgs
  );

  useEffect(() => {
    localStorage.getItem(chatName)
      ? setMessages(JSON.parse(localStorage.getItem(chatName)))
      : setMessages(db.find((chat) => chat.chatName === chatName).msgs);
  }, [chatName]);

  useEffect(() => {
    localStorage.setItem(`${chatName}`, JSON.stringify(messages));
  }, [messages]);

  const createMsg = (msg) => {
    setMessages([...messages, msg]);
  };

  const deleteMsg = (id) => {
    setMessages([...messages.filter((el) => el.id !== id)]);
  };

  const editMsg = (e, id, newMsg) => {
    e.preventDefault();

    setMessages([
      ...messages.map((el) => {
        if (el.id === id) {
          el.msg = newMsg;
        }
        return el;
      }),
    ]);
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h3 className="chat__name">{db.chatName}</h3>
      </div>

      <MessagesList
        messages={messages}
        deleteMsg={deleteMsg}
        editMsg={editMsg}
      />

      <ChatInput
        createMsg={createMsg}
        lastId={messages.length ? messages[messages.length - 1].id : 0}
      />
    </div>
  );
};
