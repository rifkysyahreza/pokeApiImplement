import { FC } from "react";
import { cn } from "../../utils/utils";
import LogoIcon from "../../assets/images/pokemon-logo.png";
import { IoIosSearch } from "react-icons/io";

const Index: FC = () => {
  return (
    <div
      className={cn(
        "flex justify-between items-center relative px-5 py-2 border-b-2 border-outer-primary"
      )}
    >
      <img src={LogoIcon} alt="Home Logo" />
      <IoIosSearch className="invert h-full" />
    </div>
  );
};

export default Index;
