import { sideBarMenu } from "@/services/Options";
import { IconCrown } from "@tabler/icons-react";
import React from "react";

const DesignSidebar = () => {
  return (
    <ul className="w-[75px] flex flex-col">
      {sideBarMenu.map((menu, index) => (
        <li
          key={index}
          className="group flex flex-col items-center justify-center h-[75px] cursor-pointer"
        >
          <div className="relative flex items-center justify-center size-8 rounded-md text-gray-500 transition-all group-hover:bg-white group-hover:shadow-xl">
            {menu.name.toLowerCase() === "ai" && (
              <IconCrown
                size="14"
                color="#fdbc68"
                fill="#fdbc68"
                className="absolute -top-1.5 -right-1.5"
              />
            )}
            <menu.icon
              strokeWidth="1.65"
              className="transition-opacity opacity-100 group-hover:opacity-0"
            />
            <menu.iconFilled
              strokeWidth="1.65"
              fill={`${menu.iconColor}`}
              color={`${menu.iconColor}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity opacity-0 group-hover:opacity-100"
            />
          </div>
          <h2 className="text-[11px] font-medium text-gray-500 transition-colors">
            {menu.name}
          </h2>
        </li>
      ))}
    </ul>
  );
};

export default DesignSidebar;
