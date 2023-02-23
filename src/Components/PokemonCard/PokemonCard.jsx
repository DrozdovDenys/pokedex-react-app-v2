import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Chip } from "@mui/material";
import styles from "./pokemonCard.module.css";
import PokemonTypes from "../PokemonTypes/PokemonTypes";

const PokemonCard = ({ pokemon, history, numOfPage }) => {
  return (
    <Grid
      item
      xs={3}
      sm={4}
      md={4}
      sx={{
        maxWidth: { xs: 100 + "%", sm: 50 + "%", md: 33 + "%", lg: 33 + "%" },
        flexBasis: { xs: 100 + "%" },
      }}
    >
      <Card
        sx={{
          maxWidth: 325,
          boxShadow: 5,
          minHeight: { lg: 490, md: 400, sm: 400 },
          margin: "0 auto",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.preventDefault();
          history(`/page/${numOfPage}/${pokemon.name}`);
        }}
        className={styles.scale}
      >
        <CardMedia
          component="img"
          sx={{ height: { lg: 345, md: 300, xs: 300 }, objectFit: "contain" }}
          image={pokemon.avatar}
          alt={pokemon.id}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Chip sx={{ bgcolor: "#FF5722" }} label={"#" + pokemon.id} />
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name.toUpperCase()}
          </Typography>
          <PokemonTypes types={pokemon.types} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
