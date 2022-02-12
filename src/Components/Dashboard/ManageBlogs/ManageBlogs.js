import React from 'react';
import { Avatar, Button, Container, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { setBlogs } from '../../../redux/actions';
import axios from 'axios';

const ManageBlogs = () => {
    // const blogs = useSelector((state) => state.blogsReducer.blogs);
    const blogs = useSelector((state) => state.blogsReducer.blogs);
    const filteredBlogs = blogs.filter(blog => blog.status === 'approved');

    // deleting order
    const handleDelete = (_id) => {
        const confirm = window.confirm('Do you want to delete?')

        if (confirm) {
            axios.delete(`http://localhost:5000/blogs/${_id}`)
                .then(data => {
                    const deletedCount = data.data.deletedCount
                    if (deletedCount > 0) {
                        alert('deleted seccessfully');
                        const remainingOrders = blogs.filter(order => order._id !== _id)
                        setBlogs(remainingOrders);
                    }
                })

        }
    }
    return (
        <Container>
            <h2>Manage all Blogs here</h2>
            <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 3 }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Photo</Typography> </TableCell>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Blog title</Typography> </TableCell>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Author Name</Typography> </TableCell>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Ratings</Typography> </TableCell>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Delete mobile</Typography> </TableCell>
                                
                                {/* <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Photo</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Blog title</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Author Name</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Status</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Delete Blog</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredBlogs.map((row) => {
                                const { _id, picture, authorName, name } = row;
                                return (
                                    <TableRow
                                        key={_id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center" component="th" scope="row">
                                            <Avatar alt={name} src={picture} variant="square" />
                                        </TableCell>
                                        <TableCell align="center">{name}</TableCell>
                                        <TableCell align="center">{authorName}</TableCell>
                                        {/* <TableCell align="center">
                                            <Button
                                                variant="contained"
                                                onClick={() => handleUpdatedStatus(_id, status)}
                                            >{status}</Button>
                                        </TableCell> */}
                                        <TableCell align="center">
                                            <Button
                                                variant="contained"
                                                sx={{ backgroundColor: 'red' }}
                                                onClick={() => handleDelete(_id)}
                                            >Delete Order</Button>
                                        </TableCell>
                                    </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};

export default ManageBlogs;