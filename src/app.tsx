import { useState } from "react";
import Webamp from "./components/webampcomp/webamp";
import YouTube from "./components/youtubecomp/youtube";
import "./app.css";


export default function App() {
  const [showWebamp, setShowWebamp] = useState(false);
  const [showYouTube, setShowYouTube] = useState(true);
  return (
      <div className="desktop">
        <div className="icon" onClick={() => setShowWebamp(true)}>
          <span>Webamp</span>
        </div>
        <div className="icon" onClick={() => setShowYouTube(!showYouTube)}>
          <span>YouTube</span>
        </div>
        {showYouTube && <YouTube />}  
        {showWebamp && (
  <Webamp visible={true} onClose={() => setShowWebamp(false)} />
)}
      </div>
  );
}