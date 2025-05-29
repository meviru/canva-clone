import SearchInput from "./SearchInput";
import SizeOptions from "./SizeOptions";
import TopbarTitle from "./TopbarTitle";

const IntroOptions = () => {
  return (
    <div className="p-4 py-8 text-center relative min-h-60 h-full border rounded-2xl rounded-bl-none rounded-br-none">
      <TopbarTitle />
      <SearchInput />
      <SizeOptions />
    </div>
  );
};

export default IntroOptions;
