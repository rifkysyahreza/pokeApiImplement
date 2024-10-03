import { FC, useContext } from "react";
import usePokemonList from "../../hooks/usePokemonList";
import Card from "./Components/Card";
import { cn } from "../../lib/utils";
import { UiPreferenceContext } from "@/context/UiPreference/uiPreferenceContext";

const Index: FC = () => {
  const { isSingleGrid } = useContext(UiPreferenceContext);

  const list = usePokemonList().pokemonList;
  console.log(list);

  return (
    <div
      className={cn(
        isSingleGrid ? "flex flex-col" : "grid grid-cols-2",
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
