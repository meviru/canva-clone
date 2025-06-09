"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopbarOptions from "@/shared/components/TopbarOptions";
import UploadedImage from "@/shared/components/UploadedImage";
import { IconDots, IconLoaderQuarter, IconSearch } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";

const AddImageSettings = ({ selectedMenu }) => {
  const { designId } = useParams();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  
  const handleUpload = async () => {
    setLoading(true);
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert("Please select a file to upload");
      return;
    }

    const file = fileInput.files[0];
    console.log(file);
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
              ref={fileInputRef}
              multiple={false}
              onChange={handleUpload}
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
