import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopbarOptions from "@/shared/components/TopbarOptions";
import UploadedImage from "@/shared/components/UploadedImage";
import { IconDots, IconLoaderQuarter, IconSearch } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const AddImageSettings = ({ selectedMenu }) => {
  const { designId } = useParams();
  const [loading, setLoading] = useState(false);

  const onFileUpload = async (e) => {
    debugger;
    setLoading(true);
    const file = e.target.files[0];
    const res = await fetch(
      `/api/upload?fileName=${file.name}&fileType=${file.type}`
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("Upload request failed:", res.status, text);
      throw new Error("Failed to get upload URL");
    }

    const data = await res.json(); // ✅ Only runs if response is OK and not empty
    console.log("Upload data:", data);

    // await fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": file.type,
    //   },
    //   body: file,
    // });

    setLoading(false);
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
              <h2 className="px-2 text-sm h-10 leading-10 flex items-center justify-center text-white bg-primary rounded-md cursor-pointer">
                {loading ? (
                  <>
                    <IconLoaderQuarter className="animate-spin" />
                    <span className="ml-2">Uploading</span>
                  </>
                ) : (
                  "Upload Image"
                )}
              </h2>
            </label>
            <input
              id="uploadImage"
              className="hidden"
              type="file"
              multiple={false}
              onChange={onFileUpload}
            />
          </div>
          <Button size="icon" className="p-0 shrink-0 h-10 w-10 cursor-pointer">
            <IconDots className="size-5" />
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
