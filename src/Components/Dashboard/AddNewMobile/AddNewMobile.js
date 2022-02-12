import { Alert, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddNewMobile = () => {
    const [mobileData, setMobileData] = useState({});
    const [confirm, setConfirm] = useState(false);
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
    ///////////////

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newMobileData = { ...mobileData };
        newMobileData[field] = value;
        setMobileData(newMobileData);
    }
    const handleReviewSubmit = (e) => {
        fetch('https://localhost:5000/mobiles', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(mobileData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setConfirm(true);
                }
            })
        e.preventDefault();
    }
    return (

        <Container>
            <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold', mb: 1 }} variant="h4">Add a New Mobile</Typography>
                    <form onSubmit={handleReviewSubmit}>
                        <TextField
                            sx={{ width: '75%', mb: 1 }}
                            onBlur={handleOnBlur}
                            name="picture"
                            label="Photo url"
                            variant="filled"
                            required />
                        <TextField
                            sx={{ width: '75%', mb: 1 }}
                            onBlur={handleOnBlur}
                            name="name"
                            label="mobile Name"
                            variant="filled"
                            required />
                        <Box sx={{ width: '75%', mb: 1, mx: 'auto', display: 'flex', justifyContent: "space-between" }}>
                            <TextField
                                onBlur={handleOnBlur}
                                type="number"
                                name="rating"
                                label="rating"
                                variant="filled"
                                required />
                            <TextField
                                onBlur={handleOnBlur}
                                type="number"
                                name="price"
                                label="price"
                                variant="filled"
                                required />
                        </Box>

                        <TextField
                            sx={{ width: '75%', mb: 1 }}
                            onBlur={handleOnBlur}
                            name="shortDescription"
                            label="short description"
                            placeholder="Add Short Description"
                            multiline
                            variant="filled"
                            required />
                        <TextField
                            sx={{ width: '75%', mb: 1 }}
                            onBlur={handleOnBlur}
                            name="description"
                            label="description"
                            placeholder="Add Description"
                            multiline
                            variant="filled"
                            required />
                        <Button sx={{ width: '75%', backgroundColor: '#339933' }} onClick={handleClick} type="submit" variant="contained">Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/x6pBpCR/addmobile.png" alt="" />
                </Grid>
            </Grid>
            {confirm && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    mobile added successfully
                </Alert>
            </Snackbar>}
        </Container >
    );
};

export default AddNewMobile;