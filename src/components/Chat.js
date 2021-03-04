import { ChatInput } from "./ChatInput";
import { MessagesList } from "./MessagesList";
import { useState, useEffect } from "react";

export const Chat = ({ db }) => {
  const [messages, setMessages] = useState(db.msgs);

  useEffect(() => {
    localStorage.getItem(`${db.chatName}`)
    ? setMessages(JSON.parse(localStorage.getItem(`${db.chatName}`)))
    : setMessages(db.msgs);
  }, [])

  useEffect(() => {
    localStorage.setItem(`${db.chatName}`, JSON.stringify(messages));
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
