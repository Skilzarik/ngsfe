import { useState } from "react";
import Webamp from "./components/webampcomp/webamp";
import YouTube from "./components/youtubecomp/youtube";
import { Taskbar } from "./components/taskbar/taskbar";
import "./app.css";


export default function App() {

  const [showWebamp, setShowWebamp] = useState(false);
  const [showYouTube, setShowYouTube] = useState(true);

  return (

      <div className="desktop">

        <div className="icon" onClick={() => setShowWebamp(true)}>
          🎵<span>Webamp</span>
        </div>

        <div className="icon" onClick={() => setShowYouTube(!showYouTube)}>
          📺<span>YouTube</span>
        </div>

        {showYouTube && <YouTube />}  
        {showWebamp && (
        <Webamp visible={true} onClose={() => setShowWebamp(false)} />
        )}

         <Taskbar
        apps={{
          webamp: showWebamp,
          youtube: showYouTube,
        }}
        toggleApp={(app) => {
          if (app === "webamp") setShowWebamp(!showWebamp);
          if (app === "youtube") setShowYouTube(!showYouTube);
        }}
      />

    </div>
  );
}