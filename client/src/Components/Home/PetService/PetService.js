import React, { useEffect, useState } from 'react'
import cat from '../../../Images/cat.png'
import './petService.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function PetService() {
    const [services,setServices]=useState([])
    let history=useHistory()

    useEffect(()=>{
        fetch('http://localhost:5000/allServices')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    const handleClick=(id)=>{
        history.push(`/book/${id}`)
    }

  return (
    <div class="container-fluid bg-light pt-5">
        <div class="container py-5">
            <div class="d-flex flex-column text-center mb-5">
                <h4 class="text-secondary mb-3">Our Services</h4>
                <h1 class="display-4 m-0"><span class="text-primary">Premium</span> Pet Services</h1>
            </div>
            <div class="row pb-3">
                    {
                        services.map(service=>{
                            return(
                                <div class="col-md-6 col-lg-4 mb-4 service-1" onClick={()=>handleClick(service._id)}>
                                    <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                    <img src={service.img} alt='cat-logo' style={{width:"50%",height:"50%",}} className='ms-5 mb-2'/>
                                        <h3 class="mb-3">{service.name}</h3>
                                        <p>{service.description}</p>
                                        <a class="text-uppercase font-weight-bold" href="" onClick={()=>handleClick(service._id)}>Book Now</a>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    </div>
  )
}
