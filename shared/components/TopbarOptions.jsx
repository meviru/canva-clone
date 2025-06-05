const TopbarOptions = ({ selectedMenu, children }) => {
  return (
    <div className="flex flex-col p-5 pb-3">
      <h2 className="text-sm font-medium text-gray-600">
        {selectedMenu?.name}
      </h2>
      <div className="relative z-10 mt-2">{children}</div>
    </div>
  );
};

export default TopbarOptions;
