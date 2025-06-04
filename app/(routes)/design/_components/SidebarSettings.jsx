import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";

const SidebarSettings = ({ selectedMenu }) => {
  return (
    <div className="w-[320px] flex flex-col h-screen border-r">
      <div className="flex flex-col p-5 pb-3">
        <h2 className="text-sm font-medium text-gray-600">
          {selectedMenu?.name}
        </h2>
        <div className="relative z-10 mt-2">
          <IconSearch
            size={22}
            className="absolute top-1/2 left-2.5 opacity-70 -translate-y-1/2"
          />
          <Input
            placeholder="Search backgrounds"
            className="pl-9 h-10 focus:ring-0"
          />
        </div>
      </div>
      <div className="grow-1 overflow-auto p-5 pt-3">
        {selectedMenu?.component}
      </div>
    </div>
  );
};

export default SidebarSettings;
