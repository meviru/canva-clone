"use client";

import { IconPalette } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { ChromePicker, CirclePicker } from "react-color";
import { getContrastColor, rgbaToHex } from "../utils";

const ColorPicker = ({ value, onColorChange }) => {
  const [displayPicker, setDisplayPicker] = useState(false);

  const handleClick = () => setDisplayPicker(!displayPicker);
  const handleClose = () => setDisplayPicker(false);

  const iconColor = useMemo(() => getContrastColor(value), [value]);

  return (
    <div className="relative inline-block space-y-4">
      <div
        className="absolute top-0 left-0 z-10 w-7 h-7 border flex items-center justify-center rounded-full cursor-pointer transition-transform hover:scale-125"
        style={{
          backgroundColor: `rgba(${value.r}, ${value.g}, ${value.b}, ${value.a})`,
        }}
        onClick={handleClick}
      >
        <IconPalette size={20} style={{ color: iconColor }} />
      </div>

      {displayPicker && (
        <div className="absolute top-8 z-50">
          <div className="fixed inset-0" onClick={handleClose} />
          <ChromePicker
            color={value}
            onChange={(color) => onColorChange(color.rgb)}
            styles={{
              default: {
                picker: {
                  width: 245,
                  fontFamily: "var(--font-poppins)",
                  border: "1px solid #eaeaea",
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "none",
                  padding: 15,
                  marginTop: 5,
                },
                body: {
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                },
                color: {
                  display: "none",
                },
                hue: {
                  height: "8px",
                  borderRadius: "6px",
                  marginBottom: "12px",
                },
                alpha: {
                  height: "8px",
                  borderRadius: "6px",
                },
              },
            }}
          />
        </div>
      )}

      <CirclePicker
        color={rgbaToHex(value)}
        onChange={(color) =>
          onColorChange({
            ...value,
            r: color.rgb.r,
            g: color.rgb.g,
            b: color.rgb.b,
          })
        }
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
        className="mt-4"
      />
    </div>
  );
};

export default ColorPicker;
