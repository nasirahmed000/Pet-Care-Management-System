import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function NavTop() {
  return (
    <div class="container-fluid">
        <div class="row py-3 px-lg-5">
            <div class="col-lg-4">
                <Link to="/" class="navbar-brand d-none d-lg-block">
                    <h1 class="m-0 display-5 text-capitalize"><span class="text-primary">Pet</span>Lover</h1>
                </Link>
            </div>
            <div class="col-lg-8 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <div class="d-inline-flex flex-column text-center pr-3 border-right">
                        <h6>Opening Hours</h6>
                        <p class="m-0">8.00AM - 9.00PM</p>
                    </div>
                    <div class="d-inline-flex flex-column text-center px-3 border-right">
                        <h6>Email Us</h6>
                        <p class="m-0">petlover@gmail.com</p>
                    </div>
                    <div class="d-inline-flex flex-column text-center pl-3">
                        <h6>Call Us</h6>
                        <p class="m-0">+8801611911079</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
