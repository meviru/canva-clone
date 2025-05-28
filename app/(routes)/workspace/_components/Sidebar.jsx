import { WorkspaceMenu } from "@/services/Options";
import { UserButton } from "@stackframe/stack";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col items-center w-[75px] p-2 pb-4 shadow bg-violet-50">
      <div className="grow">
        {WorkspaceMenu.map((menu, i) => (
          <div
            key={i}
            className="group p-1 flex items-center flex-col mb-4 cursor-pointer"
          >
            <menu.icon
              width={40}
              height={40}
              className="p-2 rounded-lg text-violet-500 group-hover:bg-violet-200 transition-colors"
            />
            <h2 className="text-xs text-violet-500">{menu.name}</h2>
          </div>
        ))}
      </div>
      <UserButton />
    </div>
  );
};

export default Sidebar;
