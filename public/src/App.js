import ChatContainer from "./Pages/ChatContainer";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ImageUpload from "./try/ImageUpload";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatContainer />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
