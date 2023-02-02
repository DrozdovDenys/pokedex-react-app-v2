import React from 'react';
import classes from './filterByTypes.module.css'

export const FilterByTypes = ({ active, setActive, filter, setFilter, handleCheckbox }) => {
    const options = [
        'grass',
        'fire',
        'bug',
        'fairy',
        'dragon',
        'shadow',
        'ground',
        'normal',
        'psychic',
        'steel',
        'dark',
        'electric',
        'fighting',
        'flying',
        'ice',
        'poison',
        'rock',
        'water',
        'unknown',
        'ghost'
    ]

    function generateOptions(options) {
        return (
            options.map(option =>
                <div className='group-type' key={option}>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name={option}
                        id={option}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            )
        )
    }

    return (
        <div>
            <button className={classes.filterByTypesBtn} onClick={() => {
                setActive(!active);
                setFilter({ ...filter, search: '' });
            }} >
                <img src={require('../../images/filter_icon.png')} width='30' height='30' alt="filter-icon" />
                <span>Filtrer by types</span>
            </button>
            <div className={`filter-by-type  ${active ? 'active' : ''}`}>
                {generateOptions(options)}
            </div>
        </div>
    )
}
