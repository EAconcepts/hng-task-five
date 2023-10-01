import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllVideos from "./Components/AllVideos";
import Login from "./Components/Auth/Login";
import Home from "./Components/Home";
import RecordPane from "./Components/RecordPane";
import StartRecording from "./Components/StartRecording";
import VideoReady from "./Components/VideoReady";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
      {/* <StartRecording/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/video/:fileName" element={<VideoReady/>}/>
          <Route exact path="/" element={<StartRecording />} />
          <Route path="/videos" element ={<AllVideos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
