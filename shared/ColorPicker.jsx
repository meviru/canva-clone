import { ChromePicker, CirclePicker } from "react-color";

const ColorPicker = ({ value }) => {
  return (
    <div className="space-y-4">
      <ChromePicker
        color={value}
        className=""
        onChange={(color) => onColorChange(color.hex)}
      />
      <CirclePicker
        color={value}
        className=""
        onChange={(color) => onColorChange(color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
