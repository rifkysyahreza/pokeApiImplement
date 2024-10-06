import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import usePokemonList from "../../hooks/usePokemonList";
import Card from "./Components/Card";
import { cn } from "../../lib/utils";
import { UiPreferenceContext } from "@/context/UiPreference/uiPreferenceContext";

const Index: FC = () => {
  const { isSingleGrid } = useContext(UiPreferenceContext);

  const list = usePokemonList().pokemonList;

  return (
    <div
      className={cn(
        isSingleGrid ? "flex flex-col" : "grid grid-cols-2",
        "gap-4"
      )}
    >
      {list.map((pokemon) => (
        <Link to={`/${pokemon.name}`} key={pokemon.name}>
          <Card name={pokemon.name} />
        </Link>
      ))}
    </div>
  );
};

export default Index;
