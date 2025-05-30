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

const CustomCanvasDialog = ({ children }) => {
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
                  />
                </div>
                <div className="flex gap-3.5">
                  <div className="flex flex-col">
                    <label htmlFor="width">Width</label>
                    <Input className="mt-1" id="width" placeholder="500" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="height">Height</label>
                    <Input className="mt-1" id="height" placeholder="500" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="cursor-pointer">Create</Button>
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
