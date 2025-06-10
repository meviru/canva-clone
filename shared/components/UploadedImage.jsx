import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";
import { FabricImage } from "fabric";

const UploadedImage = ({ images }) => {
  const { canvasEditor } = useCanvasHook();

  const setImageOnCanvas = async (image) => {
    const canvasImageRef = await FabricImage.fromURL(image?.url);
    canvasEditor?.add(canvasImageRef);
    canvasEditor?.renderAll();
  };

  return (
    <div className="flex flex-wrap gap-2">
      {images &&
        images.length > 0 &&
        images.map((image) => (
          <img
            key={image.fileId}
            src={image.url}
            alt={image.name}
            width={image.width}
            height={image.height}
            className="w-16 h-16 object-cover"
            onClick={() => setImageOnCanvas(image)}
          />
        ))}
    </div>
  );
};

export default UploadedImage;
