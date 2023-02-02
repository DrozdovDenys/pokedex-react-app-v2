import React from 'react';
import AlertNotFound from '../Components/Alert/AlertNotFound';
import { Button, Box } from '@mui/material';

export const NotFound = ({ history }) => {
    return (
        <div>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <AlertNotFound />
                <Button variant="contained" sx={{ my: 2 }} onClick={(e) => { e.preventDefault(); history(`/`) }}>
                    back to pokedex
                </Button>
          </Box>
        </div>
    )
}
