import React from 'react'
import Footer from '../Components/Home/Footer/Footer'
import Navbar from '../Components/Home/Navbar/Navbar'
import emailjs from 'emailjs-com';

export default function Contact() {
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_m0u7ugs', 'template_cry2byb', e.target, 'user_xydGkHaBEK80FXtVtNZ9N')
          .then((result) => {
              if (result) {
                alert('Your message send successfully,Thank you.!')
              }
          }, (error) => {
              alert('Something went wrong! Please try again later.')
              console.log(error.text);
          });
         e.target.reset(); 
      }

  return (
    <div>
        <Navbar/>
        <div class="container-fluid pt-5">
            <div class="d-flex flex-column text-center mb-5 pt-5">
                <h4 class="text-secondary mb-3">Contact Us</h4>
                <h1 class="display-4 m-0">Contact For <span class="text-primary">Any Query</span></h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 col-sm-8 mb-5">
                    <div class="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={sendEmail}>
                            <div class="control-group">
                                <input type="text" class="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="email" class="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control p-4" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-12 mb-n2 p-0">
                    <iframe style={{border:'0',width:'100%',height:'500px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.62426372928!2d90.32108107652273!3d23.81054290578111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1692442439958!5m2!1sen!2sbd"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
