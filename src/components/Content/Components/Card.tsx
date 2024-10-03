import { FC } from "react";
import { cn } from "@/lib/utils";
import usePokemonDetails from "@/hooks/usePokemonDetail";
import { useNavigate } from "react-router-dom";

interface IPokemonProps {
  name: string;
}

const Card: FC<IPokemonProps> = ({ name }) => {
  const detail = usePokemonDetails(name).pokemonDetails;

  const navigate = useNavigate();
  const routeChange = () => {
    const path = detail ? `/details/${name}` : "/details/UnknownPokemon";
    navigate(path);
  };

  return (
    <div
      className="flex flex-col items-center py-4 px-3 bg-[#F0F3FF] rounded-xl"
      onClick={routeChange}
    >
      <div className="flex w-full justify-between text-base font-bold">
        <div
          className={cn(
            detail?.type == "grass"
              ? "text-[#11B047]"
              : detail?.type == "water"
              ? "text-[#0098ff]"
              : detail?.type == "fire"
              ? "text-[#ff435f]"
              : detail?.type == "normal"
              ? "text-[#d1ce5c]"
              : detail?.type == "bug"
              ? "text-[#4b5220]"
              : "text-black"
          )}
        >
          {detail?.type
            ? detail.type.charAt(0).toUpperCase() + detail.type.slice(1)
            : "Unknown Type"}
        </div>
        <div>
          #{detail?.id !== undefined ? `${1000 + detail.id}` : "Unknown ID"}
        </div>
      </div>
      <img
        src={detail?.artworkFront}
        alt={`${name} Image`}
        className={cn("w-44 h-44")}
      />
      <h1 className="text-lg font-bold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
    </div>
  );
};

export default Card;
