import React from "react";
import { Chip } from "@mui/material";

export default function PokemonTypes({ types }) {
  let typesColor;
  return (
    <div>
      {" "}
      {types.map(
        (t) => (
          t.type.name === "grass"
            ? (typesColor = "#489b2c")
            : t.type.name === "poison"
            ? (typesColor = "#F64C7D")
            : t.type.name === "fire"
            ? (typesColor = "#F63019")
            : t.type.name === "water"
            ? (typesColor = "#61B7DD")
            : t.type.name === "bug"
            ? (typesColor = "#E8D400")
            : t.type.name === "normal"
            ? (typesColor = "#E1D9A7")
            : t.type.name === "ground"
            ? (typesColor = "grey")
            : t.type.name === "electric"
            ? (typesColor = "#F3CB00")
            : t.type.name === "fairy"
            ? (typesColor = "#A1568C")
            : t.type.name === "ghost"
            ? (typesColor = "#D6D9D9")
            : t.type.name === "dark"
            ? (typesColor = "#2C3454")
            : t.type.name === "fighting"
            ? (typesColor = "#C48AB5")
            : t.type.name === "ice"
            ? (typesColor = "#C3DAE8")
            : t.type.name === "steel"
            ? (typesColor = "#B4B8C9")
            : t.type.name === "rock"
            ? (typesColor = "#B2A398")
            : t.type.name === "dragon"
            ? (typesColor = "#B52025")
            : t.type.name === "psychic"
            ? (typesColor = "#e5248b")
            : t.type.name === "flying"
            ? (typesColor = "lightblue")
            : (typesColor = "#FF5722"),
          (
            <Chip
              key={t.type.name}
              sx={{ mx: 1, borderRadius: 5 + "px", bgcolor: `${typesColor}` }}
              label={t.type.name}
            />
          )
        )
      )}
    </div>
  );
}
