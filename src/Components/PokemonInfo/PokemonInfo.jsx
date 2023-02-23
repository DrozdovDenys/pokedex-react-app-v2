import React from "react";
import { Typography, Chip } from "@mui/material";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import { getRandomColor } from "../../utils/getrandomColor";
import { toFirstCharUppercase } from "../../utils/toFirstCharUpperCase";
import { CustomizedProgressBars } from "../MUI/CustomizedProgressBars";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../MUI/styles/pokemonInfoTheme";

export const PokemonInfo = ({ pokemon }) => {
  const {
    name,
    id,
    abilities,
    height,
    weight,
    types,
    sprites,
    stats,
  } = pokemon;
  const { front_default } = sprites;
  const { other } = sprites;
  const pInfoTheme = theme;

  return (
    <>
      <ThemeProvider theme={pInfoTheme}>
        <Typography variant="h1">
          {`#${id}.`} {toFirstCharUppercase(name)}
          <img src={front_default} width="10%" alt="preloader" />
        </Typography>

        <img
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
          src={
            other.home.front_default ?? require("../../images/preloader.gif")
          }
          alt="preloader"
        />
        <Typography variant="h3">Pokemon Info:</Typography>
        <Typography>Height: {height / 10} m</Typography>
        <Typography>Weight: {weight / 10} kg</Typography>
        <Typography variant="h4" sx={{ my: 1 }}>
          {" "}
          Types:
        </Typography>
        <PokemonTypes key={name} types={types} />

        <Typography variant="h4" sx={{ mt: 1 }}>
          {" "}
          Abilities:
        </Typography>
        {abilities.map((abilities) => {
          const { ability } = abilities;
          const { name } = ability;
          return (
            <Chip
              key={name + getRandomColor()}
              sx={{
                borderRadius: 0 + "px",
                bgcolor: getRandomColor(),
                mb: 1,
                color: "white",
              }}
              label={`${name}`}
              title={name}
            />
          );
        })}
        <Typography variant="h4" sx={{ mt: 1 }} align="center">
          {" "}
          Stats:
        </Typography>
        {stats.map((statsInfo) => {
          const { base_stat } = statsInfo;
          const { stat } = statsInfo;
          const { name } = stat;
          return (
            <CustomizedProgressBars
              key={name}
              name={name}
              base_stat={base_stat}
            />
          );
        })}
      </ThemeProvider>
    </>
  );
};
