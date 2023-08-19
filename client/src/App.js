import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './Components/Admin/Admin';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './Components/Admin/ManageProducts/ManageProducts';
import Login from './Components/Home/Login/Login';
import Book from './Components/User/Book/Book';
import Review from './Components/User/Review/Review';
import NotFound from './Components/User/NotFound/NotFound';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Home/Login/PrivateRoute';
import OrderList from './Components/Admin/OrderList/OrderList';
import './Style/style.css'
import Contact from './Pages/Contact';
import Booking from './Pages/Booking';
import PricingPage from './Pages/PricingPage';
import ServicePage from './Pages/ServicePage';
import AboutPage from './Pages/AboutPage';
import BookingList from './Components/User/BookingList/BookingList';
import Blog from './Components/Home/Blog/Blog';
import BlogDetails from './Components/Home/Blog/BlogDetails';
import LostAndFound from './Components/Home/LostAndFound/LostAndFound';
import AddToLostAndFound from './Components/User/AddLostFound/AddToLostAndFound';
import Register from './Components/Home/Login/Register';

export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <PrivateRoute path='/admin'>
          <Admin/>
        </PrivateRoute>
        <PrivateRoute path='/addService'>
          <AddService/>
        </PrivateRoute>
        <PrivateRoute path='/makeAdmin'>
          <MakeAdmin/>
        </PrivateRoute>
        <PrivateRoute path='/manageService'>
          <ManageProducts/>
        </PrivateRoute>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <Register/>
        </Route>
        <PrivateRoute path='/book/:id'>
          <Book/>
        </PrivateRoute>
        <PrivateRoute path='/review'>
          <Review/>
        </PrivateRoute>
        <PrivateRoute path='/orderList'>
          <OrderList/>
        </PrivateRoute>
        <PrivateRoute path='/bookingList'>
          <BookingList/>
        </PrivateRoute>
        <PrivateRoute path='/addToLostAndFound'>
          <AddToLostAndFound/>
        </PrivateRoute>


        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/booking'>
          <Booking/>
        </Route>
        <Route path='/pricing'>
          <PricingPage/>
        </Route>
        <Route path='/service'>
          <ServicePage/>
        </Route>
        <Route path='/blog'>
          <Blog/>
        </Route>
        <Route path='/blogdetails/:id'>
          <BlogDetails/>
        </Route>
        <Route path='/lostAndFound'>
          <LostAndFound/>
        </Route>
        <Route path='/about'>
          <AboutPage/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
