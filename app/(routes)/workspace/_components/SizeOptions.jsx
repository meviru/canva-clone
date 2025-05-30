"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { canvasSizeOptions } from "@/services/Options";
import { useMutation } from "convex/react";
import { useContext } from "react";
import { toast } from "sonner";

const SizeOptions = () => {
  const createDesignRecord = useMutation(api.designs.CreateNewDesign);
  const { userDetail } = useContext(UserDetailContext);

  /**
   * Creates a new design record in the database based on the selected option and user context
   * @param {{name: string, width: string, height: string}} option - The selected option
   */
  const onCanvasOptionSelect = async (option) => {
    toast("Creating new design...");
    const result = await createDesignRecord({
      name: option.name,
      width: option.width,
      height: option.height,
      uid: userDetail?._id,
    });
  };

  return (
    <ul className="flex my-8 pb-4 gap-5 items-start justify-center">
      {canvasSizeOptions.map((option, i) => (
        <li
          key={i}
          onClick={() => onCanvasOptionSelect(option)}
          className="group flex flex-col items-center justify-center cursor-pointer"
        >
          <div
            className="text-white size-12 flex items-center justify-center rounded-full transition-transform group-hover:scale-[1.12]"
            style={{
              background: option.background,
              boxShadow: `0 0 10px -5px ${option.background}`,
            }}
          >
            <option.icon size={26} />
          </div>
          <h2 className="text-xs text-gray-600 text-center font-medium mt-2 mb-1 max-w-20">
            {option.name}
          </h2>
          <span className="text-xs font-medium opacity-0 scale-[0.9] text-gray-400 transition-opacity group-hover:opacity-100">Create new</span>
        </li>
      ))}
    </ul>
  );
};

export default SizeOptions;
