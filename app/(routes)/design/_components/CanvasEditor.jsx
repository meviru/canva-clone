import { Canvas } from "fabric";
import { useEffect, useRef, useState } from "react";

const CanvasEditor = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 500,
        height: 800,
        backgroundColor: "#fff",
      });
      initCanvas.renderAll();
      setCanvas(initCanvas);
      return () => initCanvas.dispose();
    }
  }, []);
  return (
    <div>
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default CanvasEditor;
