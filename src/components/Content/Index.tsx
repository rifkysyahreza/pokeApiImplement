import { FC } from "react";
import usePokemonList from "../../hooks/usePokemonList";
import Card from "./Components/Card";
import { cn } from "../../lib/utils";

interface contentProps {
  contentLayout: boolean;
}

const Index: FC<contentProps> = ({ contentLayout }) => {
  const list = usePokemonList().pokemonList;
  console.log(list);

  return (
    <div
      className={cn(
        !contentLayout ? "flex flex-col" : "grid grid-cols-2",
        "gap-4"
      )}
    >
      {list.map((pokemon) => (
        <Card name={pokemon.name} />
      ))}
    </div>
  );
};

export default Index;
