import { forwardRef, useRef } from "react";
import Draggable from "react-draggable";
import "./youtube.css";

const YouTubeWindow = forwardRef<HTMLDivElement>(() => {
  const nodeRef = useRef(null); // new React 18 compatible ref
  return (
    <Draggable handle=".window-header">
      <div className="window" ref={nodeRef}>
        <div className="window-header">YouTube Player</div>
          <iframe
            width="400"
            height="250"
            className="youtubewindow"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>
    </Draggable>
  );
});

export default YouTubeWindow;