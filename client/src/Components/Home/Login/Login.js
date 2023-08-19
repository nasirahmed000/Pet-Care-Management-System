import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "firebase/auth"
import app from './firebaseConfig/firebaseConfig';
import { AuthErrorCodes,getAuth,signInWithEmailAndPassword} from "firebase/auth";
import NavTop from "../Navbar/NavTop";
import Footer from "../Footer/Footer";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../../../App";

function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const auth = getAuth(app);
    let history=useHistory()
    let location=useLocation()
    let { from } = location.state || { from: { pathname: '/'} };

// handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    // sign in user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const {email}=userCredential.user;
        const user={
            name:email,
            email:email,
        }
        setLoggedInUser(user)
        history.replace(from)
        // ...
      })
      .catch((err) => {
        if (
        err.code === AuthErrorCodes.INVALID_PASSWORD ||
        err.code === AuthErrorCodes.USER_DELETED
      ) {
        alert("The email address or password is incorrect");
      } else {
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
    <div>
    <NavTop/>
    <div>
        <div class="container-fluid bg-light">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="bg-primary py-5 px-4 px-sm-5">
                        <h1>Sign In</h1>
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
                            <div>
                                <button class="btn btn-dark btn-block border-0 py-3" type="submit">Log In</button>
                            </div>
                            <p style={{color:'white'}} className="mt-2">
                                Don't have an account?
                                <Link style={{color:'blue',marginLeft:'5px'}} to="/signup">Sign Up</Link>
                            </p>
                        </form>
                        <div>
                            <button class="btn btn-dark btn-block border-0 py-3" >Google Sign In</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 class="text-secondary mb-3">Going for a vacation?</h4>
                    <h1 class="display-4 mb-4">Book For <span class="text-primary">Your Pet</span></h1>
                    <p>Discover convenience like never before with our seamless booking services at "Pet Lover." Whether you're planning a vacation, need your pet pampered, or seek expert training, we've got you covered. </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Login;