import { Box } from '@mui/material'
import React from 'react'
import styles from './SearchByName.module.css'

export default function SearchByName({ searchClickHendler, setSearchValue, searchValue, isOpen, searchedPokemons, searchItemClickHendler, setCurrentPage, filter}) {
    return (
        <Box display='flex' justifyContent='flex-end' position='relative'>
            <input type="text" placeholder='Search...' onClick={searchClickHendler} onChange={e => { setSearchValue({...filter, search: e.target.value.toLowerCase()}); setCurrentPage(0) }} value={searchValue}  />
            <button onClick={() => {{ setSearchValue({...filter, search: ''})}}} style={{cursor: 'pointer'}}>x</button>
            <ul style={{ listStyle: 'none', maxHeight: 150, backgroundColor: 'white', overflow: 'auto', marginTop: 22, width: 155, padding: 0, position: 'absolute', zIndex: 5, left: 0 }}>
                {
                    searchValue && isOpen ?
                        searchedPokemons.map(p => (
                            <li key={p.id} className={styles.item} style={{ cursor: 'pointer', border: 2 + 'px' + ' outset #A8A8A8', margin: 5, padding: 5, color: 'black' }} onClick={searchItemClickHendler}>{p.name}</li>
                        ))
                        : null
                }
            </ul>
        </Box>
    )
}

