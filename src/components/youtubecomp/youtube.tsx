import { forwardRef, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import "../../app.css";

const YouTubeWindow = forwardRef<HTMLDivElement>((_, ref) => {
  const nodeRef = useRef(null); // new React 18 compatible ref

  return (
    <Draggable handle=".window-header" nodeRef={nodeRef}>
      <div className="window" ref={nodeRef}>
        <div className="window-header">YouTube Player</div>
        <iframe
          width="300"
          height="200"
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