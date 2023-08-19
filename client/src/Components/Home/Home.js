import React from 'react';
import AllService from './AllService/AllService';
import Carosal from './Carosal/Carosal';
import ContactForm from './ContactForm/ContactForm';
import Footer from './Footer/Footer';
import Mechanics from './MEchanics/Mechanics';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import BookingForm from './BookingForm/BookingForm';
import About from './About/About'
import PetService from './PetService/PetService';
import Pricing from './Pricing/Pricing';
import Blog from './Blog/Blog';

const Home = () => {
    return (
        <div >
            <Navbar/>
            <Carosal/>
            {/* <BookingForm/> */}
            <About/>
            {/* <Services/>
            <AllService/> */}
            <PetService/>
            <Pricing/>
            {/* <Services/> */}
            {/* <Mechanics/> */}
            <Testimonial/>
            {/* <ContactForm/> */}
            <Blog data="Home"/>
            <Footer/>
        </div>
    );
};

export default Home;