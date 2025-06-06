import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopbarOptions from "@/shared/components/TopbarOptions";
import UploadedImage from "@/shared/components/UploadedImage";
import { IconDots, IconSearch } from "@tabler/icons-react";
import ImageKit from "imagekit";

const AddImageSettings = ({ selectedMenu }) => {
  var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  });

  const onFileUpload = (e) => {
    const file = e.target.files[0];
    const options = {
      fileName: file.name,
      folder: "canva-clone",
    };
    imagekit.upload(file, options);
  };
  return (
    <div className="flex flex-col h-screen">
      <TopbarOptions selectedMenu={selectedMenu}>
        <div className="relative">
          <IconSearch
            size={22}
            className="absolute top-1/2 left-2.5 opacity-70 -translate-y-1/2"
          />
          <Input
            placeholder="Search images"
            className="pl-9 h-10 shadow-none focus-visible:ring-0"
          />
        </div>
        <div className="flex gap-1.5 mt-3">
          <div className="relative grow-1">
            <label htmlFor="uploadImage">
              <h2 className="p-2 text-center text-white bg-primary rounded-md cursor-pointer">
                Upload Image
              </h2>
            </label>
            <input
              id="uploadImage"
              className="hidden"
              type="file"
              multiple="false"
              onChange={onFileUpload}
            />
          </div>
          <Button size="icon" className="shrink-0 h-10 w-10 cursor-pointer">
            <IconDots size={22} />
          </Button>
        </div>
      </TopbarOptions>
      <div className="grow-1 overflow-auto p-5 pt-3">
        <UploadedImage />
      </div>
    </div>
  );
};

export default AddImageSettings;
