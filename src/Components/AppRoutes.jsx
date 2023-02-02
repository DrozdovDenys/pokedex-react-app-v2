import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Pokemon } from '../pages/Pokemon';
import { NotFound } from '../pages/NotFound';
import { Pokemons } from '../pages/Pokemons';
import { useNavigate } from 'react-router-dom';

export const AppRoutes = () => {
  const history = useNavigate();
  return (
    <Routes>
      <Route
        path="/page/:numOfPage"
        element={<Pokemons history={history} />}
      />
      <Route
        path="/page/:numOfPage/:pokemonName"
        element={<Pokemon history={history} />}
      />
      <Route path="/:not-found" element={<NotFound history={history} />} />
      <Route path="/:error" element={<Navigate to="/not-found" />} />
      <Route path="/page/:error" element={<Navigate to="/not-found" />} />
      <Route path="/" element={<Navigate to="/page/0" />} />
    </Routes>
  )
}
