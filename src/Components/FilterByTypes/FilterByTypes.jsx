import React, { useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredPokemonsNames } from "../../store/filteredPokemonsAC";

export const FilterByTypes = ({
  history,
  filter,
  setFilter,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();
  const searchedPokemonsNames = useSelector(
    (state) => state.pokemons.searchedPokemonsNames
  );

  useEffect(() => {
    dispatch(
      getFilteredPokemonsNames({
        t: filter.types,
        h: history,
      })
    );
  }, [filter.types]);

  return (
    <Autocomplete
      freeSolo
      sx={{ maxWidth: { xs: "auto", sm: 300 }, width: "100%" }}
      value={filter.search}
      onChange={(event, newValue) => {
        history(`/page/0`);
        setCurrentPage(0);
        setFilter((oldState) => ({
          ...oldState,
          search: newValue?.name ?? newValue ?? "",
        }));
      }}
      isOptionEqualToValue={(option, value) => option === value.name}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        return option.name;
      }}
      options={searchedPokemonsNames}
      renderInput={(params) => <TextField {...params} label="Pokémon name" />}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.name ?? option, inputValue, {
          insideWords: true,
        });
        const parts = parse(option.name ?? option, matches);

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
    />
  );
};
