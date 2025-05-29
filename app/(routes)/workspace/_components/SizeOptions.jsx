import { canvasSizeOptions } from "@/services/Options";

const SizeOptions = () => {
  return (
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
  );
};

export default SizeOptions;
