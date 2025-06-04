import ColorPicker from "@/shared/components/ColorPicker";
import { useState } from "react";

const BackgroundSettings = () => {
  const [bgColor, setBgColor] = useState("#fff");
  return (
    <div>
      <ColorPicker
        value={bgColor}
        onColorChange={(color) => setBgColor(color)}
      />
    </div>
  );
};

export default BackgroundSettings;
