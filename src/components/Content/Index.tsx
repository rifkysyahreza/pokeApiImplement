import { FC, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Components/Card";
import { cn } from "../../lib/utils";
import { UiPreferenceContext } from "@/context/UiPreference/uiPreferenceContext";
import { fetchPokemon } from "@/features/PokemonList/pokemonListSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelector";

const Index: FC = () => {
  const { isSingleGrid } = useContext(UiPreferenceContext);

  const dispatch = useAppDispatch();
  const { pokemonList, status, error } = useAppSelector(
    (state) => state.pokemonList
  );

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <div
      className={cn(
        isSingleGrid ? "flex flex-col" : "grid grid-cols-2",
        "gap-4"
      )}
    >
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>{error}</div>}
      {pokemonList.map((pokemon) => (
        <Link to={`/${pokemon.name}`} key={pokemon.name}>
          <Card name={pokemon.name} />
        </Link>
      ))}
    </div>
  );
};

export default Index;
