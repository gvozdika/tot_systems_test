import { NavLink } from "react-router-dom";

export const Sidebar = ({ db }) => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="chatList">
          {db.map((chat, id) => (
            <li className="chatList__item" key={id}>
              <NavLink
                className="chatList__link"
                activeClassName="active"
                to={`/${chat.chatName}`}
              >
                {chat.chatName}
              </NavLink>
            </li>
          ))}
          {/* <li className="chatList__item"><NavLink className="chatList__link" activeClassName="active" to='/work'>work</NavLink></li>
          <li className="chatList__item"><NavLink className="chatList__link" activeClassName="active" to='/flooood'>flooood</NavLink></li> */}
        </ul>
      </nav>
    </div>
  );
};
