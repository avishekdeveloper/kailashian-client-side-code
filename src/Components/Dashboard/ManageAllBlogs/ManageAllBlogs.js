import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { setBlogs, setOrders } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const ManageAllBlogs = () => {

    // const orders = useSelector((state) => state.ordersReducer.orders);
    const blogs = useSelector((state) => state.blogsReducer.blogs);
    const filteredBlogs = blogs.filter(blog => blog.status === 'approved');
    const dispatch = useDispatch();

    // Updating order status
    const handleUpdatedStatus = (_id, status, ...rest) => {

        alert('updated');
        const updatedStatus = 'approved';
        axios.put(`http://localhost:5000/blogs/${_id}`, { status: updatedStatus })

    }

    // deleting order
    const handleDelete = (_id) => {
        const confirm = window.confirm('Do you want to delete?')
        if (confirm) {
            axios.delete(`http://localhost:5000/blogs/${_id}`)
                .then(data => {
                    const deletedCount = data.data.deletedCount;
                    if (deletedCount > 0) {
                        alert('deleted seccessfully');
                        const remainingBlogs = filteredBlogs.filter(blog => blog._id !== _id)
                        dispatch(setBlogs(remainingBlogs));
                    }
                })

        }
    }


    return (
        <div>
            <h2>Manage All Blogs</h2>
            <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 3 }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead sx={{ backgroundColor: '#40bf40' }}>
                            <TableRow >
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Photo</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Blog title</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Author Name</TableCell>
                                {/* <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Rating</TableCell> */}
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Status</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Delete Blog</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredBlogs.map((row) => {
                                const { _id, status, picture, authorName, name } = row;
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
                                        <TableCell align="center">
                                            <Button
                                                variant="contained"
                                                onClick={() => handleUpdatedStatus(_id, status)}
                                            >{status}</Button>
                                        </TableCell>
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
        </div>
    );
};

export default ManageAllBlogs;