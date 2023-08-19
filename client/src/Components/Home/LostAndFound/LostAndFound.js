import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function LostAndFound() {
    const [lostAndFound,setLostAndFound]=useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allLostAndFound')
        .then(res=>res.json())
        .then(data=>setLostAndFound(data))
    }, [])

  return (
        <div>
            <Navbar/>
                <div class="container pt-5">
                        <div class="d-flex flex-column text-center mb-5 pt-5">
                            <h4 class="text-secondary mb-3">Lost & Found</h4>
                            <h1 class="display-4 m-0"><span class="text-primary">Lost</span> & Found</h1>
                        </div>
                        <div class="row pb-3">
                             {  lostAndFound.map(lost=><div class="mb-4" key={lost._id}>
                                    <div class="card border-0 mb-2" style={{width:'1200px',overflowX:'scroll'}}>
                                    <div class="d-flex justify-content-between">
                                            <img class="card-img-top flex-grow-0" src={lost.img} alt="blogImage" style={{width:'400px',height:'300px'}}/>
                                            <div class="card-body bg-light p-4">
                                                <h4 class="card-title text-truncate">{lost.title}</h4>
                                                <div class="mb-3">
                                                    <small class="mr-2"><i class="fa fa-user text-muted"></i>{lost?.author}</small>
                                                </div>
                                                <p>{lost.message}</p>
                                                <br/>
                                                <p><i class="fa fa-map-marker-alt mr-2"></i>{lost.address}</p>
                                                <p><i class="fa fa-phone-alt mr-2"></i>{lost.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                               </div>)}
                        </div>
                </div>
            <Footer/>
    </div>
  )
}
