import { Canvas } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useCanvasHook } from "../[designId]/page";

const CanvasEditor = ({ DesignInfo }) => {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState(null);
  const { canvasEditor, setCanvasEditor } = useCanvasHook();
  /**
   * Initialize Canvas with default values
   */
  useEffect(() => {
    if (canvasRef.current && DesignInfo) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: DesignInfo?.width,
        height: DesignInfo?.height,
        backgroundColor: "#fff",
      });

      // Set High Resolution Canvas
      const scaleFactor = window.devicePixelRatio || 1;
      initCanvas.set({
        width: DesignInfo?.width * scaleFactor,
        height: DesignInfo?.height * scaleFactor,
        scale: 1 / scaleFactor,
      });

      initCanvas.renderAll();
      setCanvas(initCanvas);
      setCanvasEditor(initCanvas);
      return () => initCanvas.dispose();
    }
  }, [DesignInfo]);
  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-full">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default CanvasEditor;
