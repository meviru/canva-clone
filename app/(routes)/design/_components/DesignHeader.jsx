import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@stackframe/stack";
import {
  IconDiamondFilled,
  IconMessage2,
  IconUpload,
} from "@tabler/icons-react";
import Image from "next/image";

const DesignHeader = () => {
  return (
    <div className="p-2 px-5 flex items-center justify-between bg-linear-90 from-[#00c4cc] to-[#7d2ae8]">
      <div>
        <Image
          src={"/Canva_Logo.svg"}
          width={80}
          height={50}
          alt={"logo"}
          className="brightness-0 invert"
        />
      </div>
      <div className="flex items-center">
        <Input
          placeholder="Untitled design"
          className="shadow-none placeholder-white/50 border-1 border-white/30 text-white mr-4"
        />
        <Button
          className="flex items-center mr-4 cursor-pointer border-1 border-white/30 text-white transition-colors hover:bg-white/5 hover:text-white"
          size="lg"
          variant="ghost"
        >
          <IconDiamondFilled className="size-5" />
          Upgrade your plan
        </Button>
        <UserButton />
        <Button
          size="icon"
          variant="ghost"
          className="ml-4 cursor-pointer border-1 border-white/30 text-white transition-colors hover:bg-white/5 hover:text-white"
        >
          <IconMessage2 className="size-5" />
        </Button>
        <Button
          className="flex items-center ml-4 cursor-pointer"
          size="lg"
          variant="outline"
        >
          <IconUpload className="size-5" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default DesignHeader;
