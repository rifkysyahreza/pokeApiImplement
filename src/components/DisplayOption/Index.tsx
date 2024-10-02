import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropdownIcon from "@/assets/images/dropdown-icon.png";
import SingleIcon from "@/assets/images/single-grid-icon.png";
import GridIcon from "@/assets/images/two-grid-icon.png";
import { cn } from "@/utils/utils";
import { FC, useState } from "react";

interface DisplayOptionProps {
  displayOptionFromChild: (option: boolean) => void;
}

const Index: FC<DisplayOptionProps> = ({ displayOptionFromChild }) => {
  const [isTwoGrid, setIsTwoGrid] = useState<boolean>(false);

  const handleDisplayOption = (option: boolean) => {
    setIsTwoGrid(option);
    displayOptionFromChild(option);
  };

  return (
    <div className="flex justify-between gap-6">
      <div className="flex justify-between items-center bg-outer-primary rounded-lg px-2 py-3 basis-[70%]">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex text-inner-primary w-full">
            Sort By
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-outer-primary rounded-lg flex flex-col text-inner-primary">
            <DropdownMenuLabel>Select Below</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>A to Z</DropdownMenuItem>
            <DropdownMenuItem>Z to A</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <img src={DropdownIcon} alt="" />
      </div>

      <div className="flex relative basis-[30%]">
        {/* Single Grid */}
        <div
          className={cn(
            !isTwoGrid ? "bg-outer-secondary" : "bg-outer-primary",
            "w-full h-full rounded-l-lg relative"
          )}
          onClick={() => handleDisplayOption(false)}
        >
          <img
            src={SingleIcon}
            alt="Display Single"
            className={cn(
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6"
            )}
          />
        </div>

        {/* Divider */}
        <div className="bg-inner-primary h-full w-1"></div>

        {/* Two Grid */}
        <div
          className={cn(
            isTwoGrid ? "bg-outer-secondary" : "bg-outer-primary",
            "w-full h-full rounded-r-lg relative"
          )}
          onClick={() => handleDisplayOption(true)}
        >
          <img
            src={GridIcon}
            alt="Display Grid"
            className={cn(
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
