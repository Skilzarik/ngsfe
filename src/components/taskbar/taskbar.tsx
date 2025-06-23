import "./taskbar.css";

export function Taskbar({
  apps,
  toggleApp,
}: {
  apps: { webamp: boolean; youtube: boolean };
  toggleApp: (app: "webamp" | "youtube") => void;
}) {
  return (
    <div className="taskbar">
      <button className="start-btn">Пуск</button>
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