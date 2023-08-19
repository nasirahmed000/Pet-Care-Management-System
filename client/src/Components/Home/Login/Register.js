import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "firebase/auth"
import app from './firebaseConfig/firebaseConfig';
import { AuthErrorCodes,getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import NavTop from "../Navbar/NavTop";
import Footer from "../Footer/Footer";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../../../App";

function Register({prop}) {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const auth = getAuth(app);
    let history=useHistory()
    let location=useLocation()
    let { from } = location.state || { from: { pathname: '/'} };

// handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

   // creating a new user
   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    history.replace('/login')
     // Signed up
     console.log(userCredential.user);
     // ...
   })
   .catch((err) => {
     if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
     setError("The password is too weak.");
   } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
     setError("The email address is already in use.");
   } else {
     console.log(err.code);
     alert(err.code);
   }
   });
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
    {
      prop? 
        <div>
        <div class="container-fluid bg-light">
        <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 class="text-secondary mb-3">Going for a vacation?</h4>
                    <h1 class="display-4 mb-4">Book For <span class="text-primary">Your Pet</span></h1>
                    <p>Discover convenience like never before with our seamless booking services at "Pet Lover." Whether you're planning a vacation, need your pet pampered, or seek expert training, we've got you covered. </p>
                </div>
                <div class="col-lg-5">
                    <div class="bg-primary py-5 px-4 px-sm-5">
                        <h1>Register</h1>
                        <form class="py-5" onSubmit={handleSubmit} autoComplete="true">
                            <div class="form-group">
                                <input type="email" name="email" class="form-control border-0 p-4" placeholder="Enter you email.." required
                                  onChange={handleChange}
                                  value={input.email}
                                  autoComplete="true"
                                />
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" class="form-control border-0 p-4" placeholder="Enter your password.." required
                                  onChange={handleChange}
                                  value={input.password}
                                  autoComplete="true"
                                />
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" class="form-control border-0 p-4" placeholder="ReType password.." required
                                  autoComplete="true"
                                />
                            </div>
                            {error ? <p className="login-error">{error}</p> : null}
                            <div>
                                <button class="btn btn-dark btn-block border-0 py-3" type="submit">Register</button>
                            </div>
                            <p style={{color:'white'}} className="mt-2">
                                Already have an account?
                                <Link style={{color:'blue',marginLeft:'5px'}} to="/login">Sign In</Link>
                            </p>
                        </form>
                        <div>
                            <button class="btn btn-dark btn-block border-0 py-3" >Google Sign In</button>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    </div> :
     <div>
     <NavTop/>
     <div>
         <div class="container-fluid bg-light">
         <div class="container">
             <div class="row align-items-center">
                <div class="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                     <h4 class="text-secondary mb-3">Going for a vacation?</h4>
                     <h1 class="display-4 mb-4">Book For <span class="text-primary">Your Pet</span></h1>
                     <p>Discover convenience like never before with our seamless booking services at "Pet Lover." Whether you're planning a vacation, need your pet pampered, or seek expert training, we've got you covered. </p>
                 </div>
                 <div class="col-lg-5">
                     <div class="bg-primary py-5 px-4 px-sm-5">
                         <h1>Register</h1>
                         <form class="py-5" onSubmit={handleSubmit} autoComplete="true">
                             <div class="form-group">
                                 <input type="email" name="email" class="form-control border-0 p-4" placeholder="Enter you email.." required
                                    onChange={handleChange}
                                    value={input.email}
                                    autoComplete="true"
                                 />
                             </div>
                             <div class="form-group">
                                 <input type="password" name="password" class="form-control border-0 p-4" placeholder="Enter your password.." required
                                    onChange={handleChange}
                                    value={input.password}
                                    autoComplete="true"
                                 />
                             </div>
                             <div class="form-group">
                                 <input type="password" name="password" class="form-control border-0 p-4" placeholder="ReType password.." required
                                    autoComplete="true"
                                 />
                             </div>
                             {error ? <p className="login-error">{error}</p> : null}
                             <div>
                                 <button class="btn btn-dark btn-block border-0 py-3" type="submit">Register</button>
                             </div>
                             <p style={{color:'white'}} className="mt-2">
                                 Already have an account?
                                 <Link style={{color:'blue',marginLeft:'5px'}} to="/login">Sign In</Link>
                             </p>
                         </form>
                         <div>
                             <button class="btn btn-dark btn-block border-0 py-3" >Google Sign In</button>
                         </div>
                     </div>
                 </div>
                
             </div>
         </div>
     </div>
     </div>
     <Footer/>
     </div>
    }
    </>
  );
}

export default Register;