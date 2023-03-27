import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../images/ChainStore.png"

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="#006BE4"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href="/"
                    >
                        <img src={logo} height="50px"/>
                    </IconButton>
                    <Typography href="/" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button href='/login' color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
