import { canvasSizeOptions } from "@/services/Options";
import Image from "next/image";
import headerBg from "@/public/7a0b19b4d022bb1bd2b9123033623631.webp";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";

const IntroOptions = () => {
  return (
    <div className="p-4 py-8 text-center relative min-h-60 h-full border rounded-2xl rounded-bl-none rounded-br-none">
      <div
        className="absolute inset-0 -z-10 rounded-2xl max-h-60"
        style={{
          background:
            " radial-gradient(ellipse 72% 150% at 50% 100%, #ffffff, hsla(0, 0%, 100%, 0)), linear-gradient(to bottom, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 100%, 0) 9.5%, #ffffff 94%), linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), linear-gradient(rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.10)), linear-gradient(to bottom, hsla(0, 0%, 100%, 0) 0%, #ffffff 100%), linear-gradient(to right, #00c4cc, #6f00ff)",
        }}
      >
        <Image src={headerBg} alt="Header BG" width="100%" />
      </div>
      <h1
        className="drop-shadow-2xl text-[40px] mt-5 font-medium leading-normal tracking-tighter bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(0, 196, 204, 1) 0%, rgba(90, 50, 250, 1) 50%)",
        }}
      >
        What will you design today?
      </h1>

      <div class="mx-auto mt-10 mb-16 flex max-w-2xl items-center justify-center">
        <div class="w-full relative rounded-3xl shadow-lg shadow-violet-500/20 shadow-sprea bg-gradient-to-r from-sky-400 via-violet-400 to-violet-700 p-[1px]">
          <IconSearch
            size={22}
            className="absolute top-1/2 left-5 opacity-40 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search millions of templates"
            className="outline-0 bg-white p-2 px-13 w-full text-sm h-[75px] rounded-[22px]"
          />
          <button className="absolute top-1/2 right-4 size-9 rounded-full bg-gray-200 cursor-pointer grid place-items-center -translate-y-1/2">
            <IconArrowRight className="opacity-70 w-full" />
          </button>
        </div>
      </div>

      <ul className="flex mt-8 gap-5 items-start justify-center">
        {canvasSizeOptions.map((item, i) => (
          <li
            key={i}
            className="group flex flex-col items-center justify-center cursor-pointer"
          >
            <div
              className="text-white size-12 flex items-center justify-center rounded-full transition-transform group-hover:scale-[1.12]"
              style={{ background: item.background }}
            >
              <item.icon size={26} />
            </div>
            <h2 className="text-xs max-w-20 text-gray-600 font-medium mt-2 mb-1">
              {item.name}
            </h2>
            <span className="text-xs font-medium opacity-0 scale-[0.9] text-gray-400 transition-opacity group-hover:opacity-100">{`${item.height} x ${item.width} px`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntroOptions;
