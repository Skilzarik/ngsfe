import { useState } from "react";
import Webamp from "./components/webampcomp/webamp";
import YouTube from "./components/youtubecomp/youtube";
import GeneralButton from "./components/taskbar/generalbtn/generalbtn";
import { Taskbar } from "./components/taskbar/taskbar";
import "./app.css";


export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const handleCloseModal = () => { setIsModalOpen(false); }; 
  const [showWebamp, setShowWebamp] = useState(false);
  const [showYouTube, setShowYouTube] = useState(true);

  return (

      <div className="desktop">

        <div className="icon" onClick={() => setShowWebamp(true)}>
          🎵<span>Webamp</span>
        </div>

        <div className="icon" onClick={() => setShowYouTube(true)}>
          📺<span>YouTube</span>
        </div>

        {showYouTube && <YouTube  />}  
        {showWebamp && <Webamp visible={true} onClose={() => setShowWebamp(false)} />}
        {isModalOpen && <GeneralButton isOpen={isModalOpen} onClose={handleCloseModal} />}

         <Taskbar
        apps={{
          start: isModalOpen,
          webamp: showWebamp,
          youtube: showYouTube,
        }}
        toggleApp={(app) => {
          if (app === "webamp") setShowWebamp(!showWebamp);
          if (app === "youtube") setShowYouTube(!showYouTube);
          if (app === "start") setIsModalOpen(!isModalOpen);
        }}
          />   
    </div>
  );
}