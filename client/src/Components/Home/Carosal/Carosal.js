import React from 'react';
import caroone from '../../../Images/carousel-1.jpg'
import carotwo from '../../../Images/carousel-2.jpg'
import './Carosal.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Carosal = () => {

    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active ">
                <img src={caroone} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                   <img src={carotwo} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                   <img src={caroone} class="d-block w-100" alt="..."/>
                </div>
            </div>
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div class="p-3" style={{maxWidth: "900px"}}>
                                        <h3 class="text-white mb-3 d-none d-sm-block">Best Pet Services</h3>
                                        <h1 class="display-3 text-white mb-3">Pet Spa & Grooming</h1>
                                        <h5 class="text-white mb-3 d-none d-sm-block">The pet spa and grooming salon offers a pampering experience, ensuring that furry friends receive top-notch care, relaxation, and a fresh, stylish look.</h5>
                                        <Link to="/service" class="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Book Now</Link>
                                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carosal;