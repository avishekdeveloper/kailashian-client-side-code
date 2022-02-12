import { Alert, Button, CircularProgress, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer'

const SignUp = () => {
    const [loginData, setLoginData] = useState({});

    // snack bar
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // redirects
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, loginData.photo, history);
        e.preventDefault();
    }
    return (<>
        <Header></Header>
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your profile picture url"
                            name="photo"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            name="email"
                            type="email"
                            label="Your Email"
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            name="password"
                            type="password"
                            label="Your Password"
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            name="password2"
                            type="password"
                            label="Retype Your Password"
                            variant="standard"
                            required
                        />
                        <Button onClick={handleClick} sx={{ width: '75%', m: 1, backgroundColor: '#339933' }} type="submit" variant="contained">Sign Up</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">ALREADY REGISTERED? Please LOGIN</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}

                    {authError && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            {authError}
                        </Alert>
                    </Snackbar>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/prhv3qC/login.jpg" style={{ width: '100%', margin: '5px' }} alt="" />
                </Grid>
            </Grid>
        </Container >
        <Footer></Footer>
    </>
    );
};

export default SignUp;