import Sidebar from "./_components/Sidebar";

const WorkspaceLayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-[5px] grow">{children}</div>
      </div>
    </>
  );
};

export default WorkspaceLayout;
