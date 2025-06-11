"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopbarOptions from "@/shared/components/TopbarOptions";
import UploadedImage from "@/shared/components/UploadedImage";
import { IconDots, IconLoaderQuarter, IconSearch } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const AddImageSettings = ({ selectedMenu }) => {
  const { designId } = useParams();
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/images`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching images:", error);
      return null;
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getImages();
      if (data) {
        setImages(data.images);
      }
    })();
  }, []);

  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      toast("Please select a file to upload");
      return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("designId", designId);

    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success) {
        console.log("Uploaded Image URL:", result.image.url);
      } else {
        console.error("Upload failed:", result.error);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
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
        <UploadedImage images={images} />
      </div>
    </div>
  );
};

export default AddImageSettings;
