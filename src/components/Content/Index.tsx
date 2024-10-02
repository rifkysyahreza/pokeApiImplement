import { FC } from "react";
import usePokemonList from "../../hooks/usePokemonList";
import Card from "./Components/Card";

const Index: FC = () => {
  const list = usePokemonList().pokemonList;
  console.log(list);

  return (
    <div className="grid grid-cols-2 gap-4">
      {list.map((pokemon) => (
        <Card name={pokemon.name} />
      ))}
    </div>
  );
};

export default Index;
