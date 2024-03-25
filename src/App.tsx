import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setMousePosition = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", setMousePosition);
    }
    return () => {
      window.removeEventListener("pointermove", setMousePosition);
    };
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "aqua",
          borderRadius: "50%",
          height: 40,
          width: 40,
          left: -20,
          top: -20,
          pointerEvents: "none",
          opacity: 0.8,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir mouse
      </button>
    </main>
  );
}

export default App;
