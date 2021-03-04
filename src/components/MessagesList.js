import { Message } from "./Message";

export const MessagesList = ({ messages, editMsg, deleteMsg }) => {
  return (
    <div className="chat__messages">
      {messages.map((msg) => {
        return (
          <Message
            key={msg.id}
            message={msg}
            deleteMsg={deleteMsg}
            editMsg={editMsg}
          />
        );
      })}
    </div>
  );
};
