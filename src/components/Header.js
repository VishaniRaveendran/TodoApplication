// Header.js
import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material/';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <AppBar position="fixed" elevation={2} color='primary' style={{ background: 'transparent', boxShadow: '4px' }}>

            <Toolbar>
                <Link to="/todos" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">ToDo</Button>
                </Link>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: 'Roboto', fontSize: '18px' }}
                >

                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button sx={{ color: '#fff' }}>
                            Logout
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar >

    );
};

export default Header;
