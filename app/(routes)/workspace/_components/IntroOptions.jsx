import RecentDesigns from "./RecentDesigns";
import SearchInput from "./SearchInput";
import SizeOptions from "./SizeOptions";
import TopbarTitle from "./TopbarTitle";

const IntroOptions = () => {
  return (
    <div className="px-6 py-8 relative min-h-60 h-full border rounded-2xl rounded-bl-none rounded-br-none">
      <TopbarTitle />
      <SearchInput />
      <SizeOptions />
      <RecentDesigns />
    </div>
  );
};

export default IntroOptions;
