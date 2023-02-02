import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
import { Link } from "react-router-dom";


const Header = () => {
  return (
      <Box sx={{ flexGrow: 1, backgroundColor: 'red'}} >
        <AppBar position="static" >
          <Toolbar sx={{backgroundColor: '#FF5722'}} >
            <Grid
              container
              direction="row"
              alignItems="center"
              padding={1}
              sx={{ justifyContent: { xs: 'center' , sm: 'space-between'} }}
            >
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ flexGrow: 0, display: { sm: 'block' } }}
              >
                <Link to='/'>
                Pokédex
                </Link>
              </Typography>
            </Grid>

          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Header;