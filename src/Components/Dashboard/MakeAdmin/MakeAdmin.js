import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const MakeAdmin = () => {
    const [adminData, setAdminData] = useState({});
    const { user } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newAdminData = { ...adminData };
        newAdminData[field] = value;
        setAdminData(newAdminData);
    }
    const handleAdminSubmit = (e) => {
        const user = { ...adminData };
        axios.put('https://localhost:5000/users/admin', user)

            .then(data => {
                const modifiedCount = data.data.modifiedCount
                if (modifiedCount) {
                    alert('admin added successfully');
                }
            })

        e.preventDefault();
    }
    return (
        <Container>
            <h2>Make an admin</h2>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Admin</Typography>
                    <form onSubmit={handleAdminSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            required
                            id="filled-basic"
                            name="email"
                            label="email address"
                            variant="filled" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            required
                            name="password"
                            label="password"
                            variant="filled" />
                        <Button sx={{ width: '75%', m: 1, backgroundColor: '#339933' }} type="submit" variant="contained" onClick={handleAdminSubmit}>Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/3rzVVX8/make-admin.jpg" style={{ width: '70%' }} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default MakeAdmin;