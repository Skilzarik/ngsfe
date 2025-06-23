import { useEffect, useRef} from "react";
import Webamp from "webamp";
import "./webamp.css"

interface WebampPlayerProps {
  visible: boolean;
  onClose: () => void;
}

export default function WebAmp({ visible, onClose }: WebampPlayerProps) {
  const webampRef = useRef<Webamp | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!visible) return;
    if (webampRef.current) return;

    const container = document.createElement("div");
    container.id = "webamp-container";
    document.body.appendChild(container);
    containerRef.current = container;

    const webamp = new Webamp({
      initialTracks: [
          {
            metaData: {
              artist: "DJ Mike Llama",
              title: "Llama Whippin' Intro",
            },
            url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
            duration: 5.322286,
          },
          {
            metaData: {
              artist: "Some Artist",
              title: "Title of Second Track",
            },
            url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
            duration: 5.322286,
          },
        ],
    });

    webamp.onClose(() => {
      onClose();
      webampRef.current = null;
    });

 webamp.renderWhenReady(container).then(() => {
      webampRef.current = webamp;
    });

    return () => {
      if (webampRef.current) {
        webampRef.current.dispose();
        webampRef.current = null;
      }
      if (containerRef.current) {
        document.body.removeChild(containerRef.current);
        containerRef.current = null;
      }
    };
  }, [visible, onClose]);

  return null;
}