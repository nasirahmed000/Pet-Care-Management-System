import React from 'react'
import aboutOne from '../../../Images/about-1.jpg'
import aboutTwo from '../../../Images/about-2.jpg'
import aboutThree from '../../../Images/about-3.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function About() {
  return (
    <div class="container py-5">
        <div class="row py-5">
            <div class="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3">About Us</h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Boarding</span> & <span class="text-secondary">Daycare</span></h1>
                <h5 class="text-muted mb-3">Welcome to "Pet Lover," your ultimate destination for all things pet care! We understand the deep bond you share with your furry friends.</h5>
                <p class="mb-4"> From health and nutrition tips to training guides and heartwarming pet stories, we've got it all covered. Whether you're a seasoned pet parent or just starting your journey, let "Pet Lover" be your trusted companion in ensuring your pets live their happiest, healthiest lives.</p>
                <ul class="list-inline">
                    <li><h5><i class="fa fa-check-double text-secondary mr-3"></i>Best In Industry</h5></li>
                    <li><h5><i class="fa fa-check-double text-secondary mr-3"></i>Emergency Services</h5></li>
                    <li><h5><i class="fa fa-check-double text-secondary mr-3"></i>24/7 Customer Support</h5></li>
                </ul>
                <Link to="/about" class="btn btn-lg btn-primary mt-3 px-4">Learn More</Link>
            </div>
            <div class="col-lg-5">
                <div class="row px-3">
                    <div class="col-12 p-0">
                        <img class="img-fluid w-100" src={aboutOne} alt="about"/>
                    </div>
                    <div class="col-6 p-0">
                        <img class="img-fluid w-100" src={aboutTwo} alt="about"/>
                    </div>
                    <div class="col-6 p-0">
                        <img class="img-fluid w-100" src={aboutThree} alt="about"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
