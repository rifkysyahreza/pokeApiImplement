import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IPokemonListState {
  pokemonList: PokemonList[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: IPokemonListState = {
  pokemonList: [],
  status: "idle",
  error: null,
};

export const fetchPokemon = createAsyncThunk(
  "pokemonList/fetchPokemon",
  async () => {
    const { data, status } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    if (status !== 200) {
      throw new Error("Failed to fetch Pokémon.");
    }
    console.log("data fetched");

    return data.results;
  }
);

const pokemonLisSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.pokemonList = action.payload;
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default pokemonLisSlice.reducer;
