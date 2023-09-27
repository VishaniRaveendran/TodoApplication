import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import bgImg from './../assets/backImage.png';
import { useState } from "react";
import { Navigate } from "react-router";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const handleLogin = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
            setLoggedIn(true);
        } else {
            setError('Invalid username or password');
        }
    };

    if (loggedIn) {
        return (
            <>
                <Navigate to="/Todos" />
            </>

        )
    }

    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    margin: 5,
                }}
            >
                <Grid container component={Paper}
                    elevation={2} square={false} >
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={6}
                        md={7}
                        sx={{
                            backgroundImage: "url(" + bgImg + ")",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={5}
                        component={Paper}
                        elevation={6}
                        square={false}
                    >
                        <Box
                            sx={{
                                my: 10,
                                mx: 10,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography component="h1" variant="h5" sx={{ color: '#30387db0', fontWeight: '600', alignItems: 'flex-start', fontFamily: 'Robota' }}>
                                Login
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                sx={{ mt: 3 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="Username"
                                    name="userName"
                                    autoFocus
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 4, mb: 2, textTransform: 'none', }}
                                    onClick={handleLogin}

                                >
                                    Login
                                </Button>
                                <Button variant="text" color="error" >
                                    {error && <div>{error}</div>}
                                </Button>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
