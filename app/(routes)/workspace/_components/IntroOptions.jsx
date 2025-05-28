import { canvasSizeOptions } from "@/services/Options";
import Image from "next/image";

const IntroOptions = () => {
  return (
    <div className="py-4 text-center">
      <h1
        className="drop-shadow-2xl text-3xl font-medium leading-normal bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(145deg,rgba(0, 196, 204, 1) 15%, rgba(90, 50, 250, 1) 85%)",
        }}
      >
        What will you design today?
      </h1>

      <ul className="flex mt-8 gap-5 items-start justify-center">
        {canvasSizeOptions.map((item, i) => (
          <li
            key={i}
            className="group flex gap-2 flex-col items-center justify-center cursor-pointer"
          >
            <div
              className="text-white size-11 flex items-center justify-center rounded-full transition-transform group-hover:scale-[1.15]"
              style={{ background: item.background }}
            >
              <item.icon size={26} />
            </div>
            <h2 className="text-xs text-gray-700">{item.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntroOptions;
