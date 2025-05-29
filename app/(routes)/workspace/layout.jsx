import Sidebar from "./_components/Sidebar";

const WorkspaceLayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-[5px] pl-0 pb-0 grow">{children}</div>
      </div>
    </>
  );
};

export default WorkspaceLayout;
