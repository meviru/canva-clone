import { Button } from "@/components/ui/button";
import ImageKit from "imagekit";

const UploadImage = () => {
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
    <div>
      <label>
        <Button>Upload Image</Button>
      </label>
      <input type="file" onChange={onFileUpload} />
    </div>
  );
};

export default UploadImage;
