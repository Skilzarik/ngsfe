import "./taskbar.css";


export function Taskbar({
  apps,
  toggleApp,
}: {
  apps: { webamp: boolean; youtube: boolean, start: boolean };
  toggleApp: (app: "webamp" | "youtube" | "start") => void;

}) {
  return (
    <div className="taskbar">
      {apps.start && (
        <button className="start-btn" onClick={() => toggleApp("start") }> 
          Пуск
        </button>)}

      {apps.youtube && (
        <button className="task-btn" onClick={() => toggleApp("youtube")}>
          📺 YouTube
        </button>
      )}
      {apps.webamp && (
        <button className="task-btn" onClick={() => toggleApp("webamp")}>
          🎵 Webamp
        </button>
      )}
    </div>
  );
}