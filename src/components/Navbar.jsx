import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import logo from "../images/ChainStore.png";
import { ShoppingCart } from '@mui/icons-material';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({

    root: 
    {
        flexGrow:1,
        marginBottom: "7rem",
    },
    appBar:
    {
        bacgroundColor:"whitesmoke",
        boxShadow: "none"
    },
    grow: 
    {
        flexGrow:1,
    },
    button:
    {
        marginLeft: theme.spacing(2),
    }

})

)

export default function Navbar() {
    const classes = useStyles();
    return (
        <div class='bdyHome'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className={classes.appBar}>
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
                        <div className={classes.button}>
                            <strong href='/login' class="hmeBtn" >Iniciar sesion</strong>
                            <ShoppingCart fontSize='large' color='light' />
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
