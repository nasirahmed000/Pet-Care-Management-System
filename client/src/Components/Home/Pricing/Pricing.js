import React from 'react'
import priceOne from '../../../Images/price-1.jpg'
import priceTwo from '../../../Images/price-2.jpg'
import priceThree from '../../../Images/price-3.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Pricing() {
  return (
    <div class="container-fluid bg-light pt-5 pb-4">
        <div class="container py-5">
            <div class="d-flex flex-column text-center mb-5">
                <h4 class="text-secondary mb-3">Pricing Plan</h4>
                <h1 class="display-4 m-0">Choose the <span class="text-primary">Best Price</span></h1>
            </div>
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <div class="card border-0">
                        <div class="card-header position-relative border-0 p-0 mb-4">
                            <img class="card-img-top" src={priceOne} alt=""/>
                            <div class="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100" style={{top:'0', left: "0", zIndex: '1', background: 'rgba(0, 0, 0, .5)'}}>
                                <h3 class="text-primary mb-3">Basic</h3>
                                <h1 class="display-4 text-white mb-0">
                                    <small class="align-top" style={{fontSize:'22px', lineHeight: "45px"}}>TK</small>4900<small class="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Mo</small>
                                </h1>
                            </div>
                        </div>
                        <div class="card-body text-center p-0">
                            <ul class="list-group list-group-flush mb-4">
                                <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Feeding</li>
                                <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Boarding</li>
                                <li class="list-group-item p-2"><i class="fa fa-times text-danger mr-2"></i>Spa & Grooming</li>
                                <li class="list-group-item p-2"><i class="fa fa-times text-danger mr-2"></i>Veterinary Medicine</li>
                            </ul>
                        </div>
                        <div class="card-footer border-0 p-0">
                            <Link to='/login' class="btn btn-primary btn-block p-3" style={{borderRadius: '0'}}>Signup Now</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card border-0">
                        <div class="card-header position-relative border-0 p-0 mb-4">
                            <img class="card-img-top" src={priceTwo} alt=""/>
                            <div class="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100" style={{top:'0', left: "0", zIndex: '1', background: 'rgba(0, 0, 0, .5)'}}>
                                <h3 class="text-secondary mb-3">Standard</h3>
                                <h1 class="display-4 text-white mb-0">
                                    <small class="align-top" style={{fontSize:'22px', lineHeight: "45px"}}>TK</small>11000<small class="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Mo</small>
                                </h1>
                            </div>
                        </div>
                        <div class="card-body text-center p-0">
                            <ul class="list-group list-group-flush mb-4">
                                <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Feeding</li>
                                <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Boarding</li>
                                <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Spa & Grooming</li>
                                <li class="list-group-item p-2"><i class="fa fa-times text-danger mr-2"></i>Veterinary Medicine</li>
                            </ul>
                        </div>
                        <div class="card-footer border-0 p-0">
                            <Link to='/login' class="btn btn-secondary btn-block p-3" style={{borderRadius: '0'}}>Signup Now</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card border-0">
                        <div class="card-header position-relative border-0 p-0 mb-4">
                            <img class="card-img-top" src={priceThree} alt=""/>
                            <div class="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100" style={{top:'0', left: "0", zIndex: '1', background: 'rgba(0, 0, 0, .5)'}}>
                                <h3 class="text-primary mb-3">Premium</h3>
                                <h1 class="display-4 text-white mb-0">
                                    <small class="align-top" style={{fontSize:'22px', lineHeight: "45px"}}>TK</small>14900<small class="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Mo</small>
                                </h1>
                            </div>
                        </div>
                        <div class="card-body text-center p-0">
                            <ul class="list-group list-group-flush mb-4">
                                <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Feeding</li>
                                <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Boarding</li>
                                <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Spa & Grooming</li>
                                <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Veterinary Medicine</li>
                            </ul>
                        </div>
                        <div class="card-footer border-0 p-0">
                            <Link to='/login' class="btn btn-primary btn-block p-3" style={{borderRadius: '0'}}>Signup Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
