import { Alert, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const [reviewData, setReviewData] = useState({});
    const { user } = useAuth();
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

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData['name'] = user?.displayName;
        newReviewData['picture'] = user?.photoURL;
        newReviewData[field] = value;
        setReviewData(newReviewData);
    }
    const handleReviewSubmit = (e) => {
        axios.post('https://localhost:5000/reviews', reviewData)
            .then(data => {
                const id = data.data.insertedId;
                if (id) {
                    setConfirm(true);
                }
            })

        e.preventDefault();
    }
    return (
        <Container>
            <h2>Please, give your review here</h2>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Review</Typography>
                    <form onSubmit={handleReviewSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="filled-basic"
                            name="name"
                            type="name"
                            label="Your Name"
                            autoFocus
                            value={user.displayName}
                            variant="filled"
                            required
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="filled-basic"
                            name="rating"
                            label="Rating (0-5)"
                            type="number"
                            variant="filled"
                            required
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="outlined-textarea"
                            name="comment"
                            label="Comment"
                            placeholder="add your comment here"
                            multiline
                            variant="filled"
                            required
                        />
                        <Button sx={{ width: '75%', m: 1, backgroundColor: '#339933' }} onClick={handleClick} type="submit" variant="contained">Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/LhcrLqF/review.png" style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
            {confirm && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Review added successfully
                </Alert>
            </Snackbar>}
        </Container >
    );
};

export default Review;