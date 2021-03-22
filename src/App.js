import "./App.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { db } from "./db";
// import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar db={db} />
        <Route exact path="/" render={() => <Redirect to="/work" />} />
        <Route path="/:chatName" render={() => <Chat db={db} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
