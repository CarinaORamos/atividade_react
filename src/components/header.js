import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
 
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar color= "warning" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {  
              <MenuIcon />
              }
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Planejamento
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;