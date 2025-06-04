"use client";

import { IconPaletteFilled } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { ChromePicker, CirclePicker } from "react-color";

const ColorPicker = ({ value, onColorChange }) => {
  const [displayPicker, setDisplayPicker] = useState(false);

  const handleClick = () => setDisplayPicker(!displayPicker);
  const handleClose = () => setDisplayPicker(false);

  function getContrastColor(hexColor) {
    let hex = hexColor.replace("#", "");

    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.6 ? "#000" : "#fff";
  }

  const iconColor = useMemo(() => getContrastColor(value), [value]);
  return (
    <div className="relative inline-block space-y-4">
      <div
        className={`absolute top-0 left-0 z-10 w-7 h-7 flex items-center justify-center ${value.includes("#fff") ? "border-1" : ""} rounded-full cursor-pointer transition-transform hover:scale-125`}
        style={{ backgroundColor: value }}
        onClick={handleClick}
      >
        <IconPaletteFilled size={20} style={{ color: iconColor }} />
      </div>

      {/* Popover with ChromePicker */}
      {displayPicker && (
        <div className="absolute top-8 z-50">
          <div className="fixed inset-0" onClick={handleClose} />
          <ChromePicker
            color={value}
            onChange={(color) => onColorChange(color.hex)}
            styles={{
              default: {
                picker: {
                  width: "275px",
                  fontFamily: "var(--font-poppins)",
                  border: "1px solid #eaeaea",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "none",
                },
                saturation: {
                  borderRadius: "8px",
                },
                body: {
                  marginTop: "5px",
                },
                color: {
                  display: "none",
                },
              },
            }}
          />
        </div>
      )}

      {/* Circle Picker (Optional for quick colors) */}
      <CirclePicker
        color={value}
        styles={{
          default: {
            picker: {
              width: "100%",
            },
            card: {
              margin: 0,
              display: "grid",
              gap: "0px 10px",
              gridTemplateColumns: "repeat(7, 28px)",
            },
          },
        }}
        onChange={(color) => onColorChange(color.hex)}
        className="mt-4"
      />
    </div>
  );
};

export default ColorPicker;
