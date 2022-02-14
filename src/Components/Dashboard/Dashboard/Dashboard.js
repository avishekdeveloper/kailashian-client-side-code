import * as React from 'react';
import './Dashboard.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch, NavLink } from "react-router-dom";
import { Avatar, Button } from '@mui/material';
// import Review from '../Review/Review';
// import MyOrders from '../MyOrders/MyOrders';
// import Payment from '../Payment/Payment';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import useAuth from '../../../Hooks/useAuth';
import DefaultPage from '../DefaultPage/DefaultPage';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../../Hooks/useAuth';
import Pages from '../Pages/Pages';
// import AddNewMobile from '../AddNewMobile/AddNewMobile';
// import ManageAllBlogs from '../ManageAllBlogs/ManageAllBlogs';
// import ManageBlogs from '../ManageBlogs/ManageBlogs';
// import {Link} from 'react-bootstrap'



const drawerWidth = 250;

function Dashboard(props) {
    const { user, admin, logOut } = useAuth();
    // const { logOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    console.log(user.displayName);
    const drawer = (
        <div className="py-5">

            <Toolbar />
            <Divider />
            <Box>
                <Avatar
                    alt="Remy Sharp"
                    src={user?.photoURL}
                    sx={{ width: 150, height: 150, mx: 'auto', mt: 1 }}
                />

                <Typography variant="h5" sx={{ mt: 1, fontWeight: 700, textAlign: 'center' }}>{user?.displayName}</Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>{user?.email}</Typography>
            </Box>
            <Box sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
                {
                    !admin ?
                        <Box>
                            <NavLink exact activeClassName="active" to={`${url}`} className="dashboard-tabs"><Button color="inherit">Dashboard</Button></NavLink>
                            <NavLink exact activeClassName="active" to="/login" className="dashboard-tabs"><Button color="inherit">Login</Button></NavLink>
                            <Typography > Please Login as Admin </Typography>

                            {/* <Button sx={{ width: "75%", mt: 1, backgroundColor: 'green' }}  >
                                <NavLink exact to="/login" className="dashboard-tabs"><Button color="inherit">Dashboard</Button></NavLink>
                            </Button>
                            <Link className="btn btn-success">Login</Link> */}
                            {/* <Button sx={{ width: "75%", mt: 1, backgroundColor: 'green' }} variant="contained" >
                                <Link to="/login">Login</Link>

                            </Button> */}


                            {/* <NavLink exact activeClassName="active" to={`${url}/myOrders`} className="dashboard-tabs"><Button color="inherit">My Orders</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/review`} className="dashboard-tabs"><Button color="inherit">Review</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/payment`} className="dashboard-tabs"><Button color="inherit">Payment</Button></NavLink> */}
                        </Box>
                        :
                        <Box>
                            <NavLink exact activeClassName="active" to={`${url}`} className="dashboard-tabs"><Button color="inherit">Dashboard</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/pages`} className="dashboard-tabs"><Button color="inherit">Pages</Button></NavLink>
                            {/* <NavLink exact activeClassName="active" to={`${url}`} className="dashboard-tabs"><Button color="inherit">Dashboard</Button></NavLink> */}

                            {/* <NavLink exact activeClassName="active" to={`${url}/makeAdmin`} className="dashboard-tabs"><Button color="inherit">Make Admin</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/addNewmobile`} className="dashboard-tabs"><Button color="inherit">Add New mobile</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/manageAllBlogs`} className="dashboard-tabs"><Button color="inherit">Manage All Blogs</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/manageBlogs`} className="dashboard-tabs"><Button color="inherit">Manage Blogs</Button></NavLink> */}
                        </Box>
                }
            </Box>
            <Divider />
            <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Link to="/" className="dashboard-tabs"><Button sx={{ width: "75%", mt: 1 }} variant="outlined">Go Home</Button></Link>
                <Button sx={{ width: "75%", mt: 1 }} color="error" variant="contained" onClick={logOut}>Logout</Button>
            </Box>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="py-5" sx={{ display: 'flex' }}>

            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, backgroundColor: 'black'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {/* nested routing */}
                <Switch>
                    <Route exact path={path}>
                        <DefaultPage></DefaultPage>
                    </Route>
                    <Route exact path={`${path}/pages`}>
                        <Pages></Pages>
                    </Route>
                    {/* <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addNewMobile`}>
                        <AddNewMobile></AddNewMobile>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllBlogs`}>
                        <ManageAllBlogs></ManageAllBlogs>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageBlogs`}>
                        <ManageBlogs></ManageBlogs>
                    </AdminRoute> */}
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
