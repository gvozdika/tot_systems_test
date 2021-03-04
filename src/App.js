import "./App.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import { db } from "./db";
// import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Sidebar db={db} />

        {/* {db.map((chat, id) => (
          <Route key={id} path={`/${chat.chatName || ''}`} render={() => <Chat db={chat} />} />
        ))} */}
        <Route exact path="/" render={() => <Chat db={db[0]} />} />
        <Route path="/work" render={() => <Chat db={db[0]} />} />
        <Route path="/flooood" render={() => <Chat db={db[1]} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
