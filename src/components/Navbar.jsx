import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import logo from "../images/ChainStore.png";
import { ClassNames } from '@emotion/react';
import { Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

export default function Navbar() {
    return (
        <div class='bdyHome'>
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
                            <img src={logo} height="50px" alt=''/>
                        </IconButton>
                            <a href='/login' class="hmeBtn" >Iniciar sesion</a>
                        <ShoppingCart fontSize='large' color='primary' />
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
