import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";
import { Input } from "@/components/ui/input";
import ColorPicker from "@/shared/components/ColorPicker";
import TopbarOptions from "@/shared/components/TopbarOptions";
import { rgbaToHex } from "@/shared/utils";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const BackgroundSettings = ({ selectedMenu }) => {
  const [bgColor, setBgColor] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  });

  const { canvasEditor } = useCanvasHook();

  const onColorChange = (color) => {
    setBgColor(color);
    const bgColor = rgbaToHex(color);
    canvasEditor?.set({
      backgroundColor: bgColor,
      backgroundImage: null,
    });
    canvasEditor?.renderAll();
  };

  return (
    <div className="flex flex-col h-screen">
      <TopbarOptions selectedMenu={selectedMenu}>
        <IconSearch
          size={22}
          className="absolute top-1/2 left-2.5 opacity-70 -translate-y-1/2"
        />
        <Input
          placeholder="Search backgrounds"
          className="pl-9 h-10 shadow-none focus-visible:ring-0"
        />
      </TopbarOptions>
      <div className="grow-1 overflow-auto p-5 pt-3">
        <ColorPicker
          value={bgColor}
          onColorChange={(color) => onColorChange(color)}
        />
      </div>
    </div>
  );
};

export default BackgroundSettings;
