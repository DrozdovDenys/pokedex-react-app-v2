import React from 'react';
import SearchByName from '../SearchByName/SearchByName';
import { useState, useEffect } from 'react';
import { FilterByTypes } from '../FilterByTypes/FilterByTypes';

export const FiltersBar = ({ pokemons, history, setCurrentPage, filteredPokemons, setfilteredPokemons }) => {

	const [filter, setFilter] = useState({
		types: {
			grass: false,
			normal: false,
			fighting: false,
			flying: false,
			poison: false,
			ground: false,
			rock: false,
			bug: false,
			ghost: false,
			steel: false,
			fire: false,
			water: false,
			electric: false,
			psychic: false,
			ice: false,
			dragon: false,
			dark: false,
			fairy: false,
			unknow: false,
			shadow: false,
		},
		search: ''
	});

	const [isOpen, setIsOpen] = useState(false);

	const searchItemClickHendler = (e) => {
		setFilter({ ...filter, search: e.target.textContent });
		setIsOpen(!isOpen);
	}

	const searchClickHendler = () => {
		setIsOpen(true);
	}

	// ====================FILTER POKEMONS BY TYPES==================================================================
	const [active, setActive] = useState(false);
	const [isCheckedType, setIsCheckedType] = useState(false);


	useEffect(() => {
		let searchedPokemons = [];
		setfilteredPokemons([]);
		if (isCheckedType && filter.search) {
			searchedPokemons = filteredPokemons.filter(p => filter.search.length != 0 && p.name.includes(filter.search.toLowerCase()))
			setfilteredPokemons(searchedPokemons);
			if (searchedPokemons.length === 0) {
				history('/not-found')
			}
		} else if (!isCheckedType && filter.search) {
			searchedPokemons = pokemons.filter(p => filter.search.length !== 0 && p.name.includes(filter.search))
			setfilteredPokemons(searchedPokemons);
			if (searchedPokemons.length === 0) {
				history('/not-found')
			}
		}
	}, [filter.search]);
	// ==========================================

	const handleCheckbox = e => {
		setfilteredPokemons([]);
		setCurrentPage(0);
		history(`/page/0`);
		setIsCheckedType(!isCheckedType);
		setFilter({ ...filter, types: { ...filter.types, [e.target.name]: e.target.checked } })


		if (e.target.checked) {
			const filteredResults = pokemons.filter(pokemon =>
				pokemon.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);
			if (filteredResults.length === 0 && filteredPokemons.length === 0) {
				history('/not-found')
			}
			setfilteredPokemons([...new Set([...filteredPokemons, ...filteredResults])]);
		} else {
			const filteredResults = filteredPokemons.filter(
				pokemon =>
					!pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setfilteredPokemons([...filteredResults]);
		}
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 10  , gap: 10}}>
			<FilterByTypes active={active} setActive={setActive} filter={filter} setFilter={setFilter} handleCheckbox={handleCheckbox}/>
			<SearchByName searchClickHendler={searchClickHendler} setSearchValue={setFilter} searchValue={filter.search} isOpen={isOpen} searchedPokemons={filteredPokemons} searchItemClickHendler={searchItemClickHendler} setCurrentPage={setCurrentPage} filter={filter} />
		</div>
	);
};
