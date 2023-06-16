import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
       <ThemeProvider theme={darkTheme}>
        <AppBar position="sticky" color=''>
        <Toolbar>
            <Typography  variant="h6"style={{textAlign:'center'}}component="div" sx={{ flexGrow: 1 }}>
                AdminPage
            </Typography>

            



        </Toolbar>
        </AppBar>


        </ThemeProvider>
    </Box>




  )
}

export default NavBar