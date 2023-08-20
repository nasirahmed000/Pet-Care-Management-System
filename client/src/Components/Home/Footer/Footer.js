import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
    return (
        <section>
            <div class="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
                <div class="row pt-5">
                    <div class="col-lg-5 col-md-12 mb-5">
                        <h1 class="mb-3 display-5 text-capitalize text-white"><span class="text-primary">Pet</span>Lover</h1>
                        <p class="m-0">The pet spa and grooming salon offers a pampering experience, ensuring that furry friends receive top-notch care, relaxation, and a fresh, stylish look.</p>
                    </div>
                    <div class="col-lg-7 col-md-12">
                        <div class="row">
                            <div class="col-md-6 mb-5">
                                <h5 class="text-primary mb-4">Get In Touch</h5>
                                <p><i class="fa fa-map-marker-alt mr-2"></i>Mirpur, Dhaka, Bangladesh</p>
                                <p><i class="fa fa-phone-alt mr-2"></i>+8801611911079</p>
                                <p><i class="fa fa-envelope mr-2"></i>petlover@gmail.com</p>
                                <div class="d-flex justify-content-start mt-4">
                                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="https://twitter.com/nasirahmed000"><i class="fab fa-twitter p-2"></i></a>
                                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="https://www.facebook.com/nasirahmed000000"><i class="fab fa-facebook-f p-2"></i></a>
                                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="https://www.linkedin.com/in/nasirahmed000/"><i class="fab fa-linkedin-in p-2"></i></a>
                                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="https://www.instagram.com/nasirahmed000/"><i class="fab fa-instagram p-2"></i></a>
                                </div>
                            </div>
                            <div class="col-md-6 mb-5">
                                <h5 class="text-primary mb-4">Popular Links</h5>
                                <div class="d-flex flex-column justify-content-start">
                                    <Link class="text-white mb-2" to="/"><i class="fa fa-angle-right mr-2"></i>Home</Link>
                                    <Link class="text-white mb-2" to="/about"><i class="fa fa-angle-right mr-2"></i>About Us</Link>
                                    <Link class="text-white mb-2" to="/service"><i class="fa fa-angle-right mr-2"></i>Our Services</Link>
                                    <Link class="text-white mb-2" to="/"><i class="fa fa-angle-right mr-2"></i>Our Team</Link>
                                    <Link class="text-white" to="/contact"><i class="fa fa-angle-right mr-2"></i>Contact Us</Link>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid text-white py-4 px-sm-3 px-md-5" style={{background:"#111111"}}>
                <div class="row">
                    <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                        <p class="m-0 text-white">
                            &copy; <a class="text-white font-weight-bold" href="https://freewebsitecode.com">PetLover</a>. All Rights Reserved. Copyright @ 2023
                        
                        </p>
                    </div>
                    <div class="col-md-6 text-center text-md-right">
                        <ul class="nav d-inline-flex">
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="/">Privacy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="/">Terms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="/">FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="/">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Footer;