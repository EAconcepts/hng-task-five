import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Home from "./Components/Home";
import StartRecording from "./Components/StartRecording";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/record" element={<StartRecording />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
