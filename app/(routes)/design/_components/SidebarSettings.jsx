import React from "react";

const SidebarSettings = ({ selectedMenu }) => {
  return (
    <div className="w-[320px] p-5 h-screen border-r">
      {selectedMenu?.component}
    </div>
  );
};

export default SidebarSettings;
