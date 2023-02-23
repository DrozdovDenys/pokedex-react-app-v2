import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSearchedPokemonsNames } from "../../store/searchedPokemonsAC";

export const SearchByName = ({
  history,
  setFilter,
  setCurrentPage,
  filter,
}) => {
  const dispatch = useDispatch();
  const { filteredPokemonsNames, pokemonsTypes } = useSelector(
    (state) => state.pokemons
  );

  useEffect(() => {
    dispatch(getSearchedPokemonsNames({ q: filter.search, h: history }));
  }, [filteredPokemonsNames.length, filter.search]);

  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={pokemonsTypes}
      onChange={(event, newValue) => {
        history(`/page/0`);
        setCurrentPage(0);
        setFilter((oldState) => ({
          ...oldState,
          types: newValue,
          search: "",
        }));
      }}
      renderInput={(params) => (
        <TextField {...params} label="pokémons types" placeholder="Favorites" />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option, inputValue, {
          insideWords: true,
        });
        const parts = parse(option, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
      getOptionLabel={(option) => option}
      sx={{ width: "500px", my: 2 }}
    />
  );
};
