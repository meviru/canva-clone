const SidebarSettings = ({ selectedMenu }) => {
  const RenderedComponent =
    selectedMenu?.component &&
    typeof selectedMenu.component === "function" &&
    selectedMenu.component({ selectedMenu });

  return <div className="w-[320px] h-screen border-r">{RenderedComponent}</div>;
};

export default SidebarSettings;
