import { canvasSizeOptions } from "@/services/Options";
import Image from "next/image";
import headerBg from "@/public/7a0b19b4d022bb1bd2b9123033623631.webp";

const IntroOptions = () => {
  return (
    <div className="p-4 py-8 text-center relative min-h-60">
      <div
        className="absolute inset-0 -z-10 rounded-2xl"
        style={{
          background:
            " radial-gradient(ellipse 72% 150% at 50% 100%, #ffffff, hsla(0, 0%, 100%, 0)), linear-gradient(to bottom, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 100%, 0) 9.5%, #ffffff 94%), linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), linear-gradient(rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.10)), linear-gradient(to bottom, hsla(0, 0%, 100%, 0) 0%, #ffffff 100%), linear-gradient(to right, #00c4cc, #6f00ff)",
        }}
      >
        <Image src={headerBg} alt="Header BG" width="100%" />
      </div>
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
            className="group flex flex-col items-center justify-center cursor-pointer"
          >
            <div
              className="text-white size-11 flex items-center justify-center rounded-full transition-transform group-hover:scale-[1.15]"
              style={{ background: item.background }}
            >
              <item.icon size={26} />
            </div>
            <h2 className="text-xs text-gray-700 mt-2 mb-1">{item.name}</h2>
            <span className="text-xs opacity-0 scale-[0.9] text-gray-500 transition-opacity group-hover:opacity-100">{`${item.height} x ${item.width}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntroOptions;
