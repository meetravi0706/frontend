import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { ChatPage } from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Homepage} />
        <Route exact path="/chats" Component={ChatPage} />
      </Routes>
    </div>
  );
}

export default App;
