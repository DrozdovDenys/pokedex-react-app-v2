import React from 'react'
import {
    TablePagination,
  } from "@mui/material";

const Pagination = (props) => {

    return (
        <TablePagination
        style={{display: 'flex' ,justifyContent: 'center'}}
        component="div"
        count={props.totalPokemons ?  props.totalPokemons : 1279}
        page={props.currentPage}
        onPageChange={props.handleChangePage}
        rowsPerPage={props.pokemonsPerPage}
        rowsPerPageOptions={props.pokemonsPerPageOptions}
        onRowsPerPageChange={props.handleChangeRowsPerPage}
        showFirstButton
        showLastButton
        labelRowsPerPage="Cards per page:"
      />
    )
}

export default Pagination;
