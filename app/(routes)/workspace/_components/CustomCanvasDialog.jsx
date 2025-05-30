"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { IconLoader } from "@tabler/icons-react";
import { useMutation } from "convex/react";
import { useContext, useState } from "react";
import { toast } from "sonner";

const CustomCanvasDialog = ({ children }) => {
  const [name, setName] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const [loading, setLoading] = useState(false);
  const { userDetail } = useContext(UserDetailContext);
  const createDesignRecord = useMutation(api.designs.CreateNewDesign);

  const onCreate = async () => {
    toast("Creating new design...");
    setLoading(true);
    const result = await createDesignRecord({
      name: name,
      width: +width,
      height: +height,
      uid: userDetail?._id,
    });
    setLoading(false);
    resetForm();
  };

  const resetForm = () => {
    setName(null);
    setWidth(null);
    setHeight(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a design</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className="text-sm">Custom canvas width and height</h2>
              <div className="flex flex-col gap-3.5 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="designName">Design Name</label>
                  <Input
                    className="mt-1"
                    id="designName"
                    placeholder="Design Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex gap-3.5">
                  <div className="flex flex-col">
                    <label htmlFor="width">Width</label>
                    <Input
                      className="mt-1"
                      type="number"
                      id="width"
                      placeholder="500"
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="height">Height</label>
                    <Input
                      className="mt-1"
                      type="number"
                      id="height"
                      placeholder="500"
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    className="flex items-center justify-center cursor-pointer"
                    disabled={loading || !name || !width || !height}
                    onClick={onCreate}
                  >
                    {loading && <IconLoader className="mr-1 animate-spin" />}
                    {loading ? "Creating..." : "Create"}
                  </Button>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CustomCanvasDialog;
