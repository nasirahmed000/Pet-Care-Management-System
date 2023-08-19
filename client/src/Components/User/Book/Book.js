import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../../App";
import SideNav from "../../Admin/SideNav/SideNav";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "../Payment/Payment";
import NavTop from "../../Home/Navbar/NavTop";

const stripePromise = loadStripe(
  "pk_test_51Ie1LfKShqG18GEFkr2yl50mpIIFtG4rrhE4T6KYb5jGOTdmx9fCRBIKdzjMorcEWj9t9sWHi4q2eZtFTkT6NQdW00oi0Ri2C7"
);

const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { id } = useParams();
  const [services, setServices] = useState([]);

  const history=useHistory()

  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const selectedService = services.filter((service) => service._id == id);
  const { name, price,img,description } = selectedService[0] || {};

    const bookingDetails={
      name:loggedInUser.name,
      email:loggedInUser.email,
      serviceName:name,
      price:price,
      paymentBy:'VISA Card',
      image:img,
      description:description,
      status:'Pending'
    }

  const handleAppointment=()=>{
      if (bookingDetails.serviceName == null) {
        alert("You haven't select any service yet.Please select a service first.Thank you")
        history.push('/service')
      }
      else(
        fetch('http://localhost:5000/addBooking',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(bookingDetails)
      })
      .then(res=>res.json())
      .then(data=>{
          if(data) {
              alert('Your appointment submitted successfully.!')
              history.push('/bookingList')
          }
      })
      )
      
  }

  return (
      <>
        <NavTop/>
        <SideNav />
          <div className="container mt-5">
            <h3 className="ms-4">Book <span className='me-3' style={{float:'right',color:'#FFC513',backgroundColor:'gray',borderRadius:'5px',padding:'5px'}}><h4>{loggedInUser.name}</h4></span></h3>
            <div className='mt-4'
              style={{
                margin: "10px",
                padding: "20px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "10px",
              }}
            >
              <p className='text-secondary'>User Name:</p><h4>{loggedInUser.name}</h4>
              <p className='text-secondary'>Email:</p><h4>{loggedInUser.email}</h4>
              <p className='text-secondary'>Service Name:</p><h3>{name}</h3>
              <p className='text-secondary'>Service cost:</p><h3>Tk.{price}</h3>
              <h5 className='mt-4 mb-3'>Pay with:</h5>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              <button style={{float:'right'}} className='button mt-5'onClick={handleAppointment}>Book Appointment</button>
            </div>
          </div>
      </>
  );
};

export default Book;
