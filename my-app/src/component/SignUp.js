import React from 'react'
import img from './image/logo.png'
import './login.css'
export default function SignUp() {

    return (
        <>
        <body>
    <div className="img">
        <img src={img} alt=""/>
    </div>
    <div className="container">

        <div className="wrapper">
            <div className="title">
                <h3>Signup</h3>

            </div>
            <p>Welcome to product name, Please login to your account</p>
            <form action="login.html" method="post" name="form" onsubmit="return validated()">
                <div className="row">

                    <h3>College Id</h3>
                    <i className="fa-solid fa-user"></i>
                    <input type="text" name="email" placeholder="id@pvppcoe.ac.in" required=""/>
                    <p id="email_error"></p>
                </div>



                <div className="row">
                    <h3>Password</h3>
                    <i className="fa-solid fa-eye" id="eyeicon"></i>
                    <input type="password" name="password" id="password" placeholder="Password" required=""/>
                    <p id="pass_error"></p>
                </div>

                <div className="row">
                    <h3>Confirm Password</h3>
                    <i className="fa-solid fa-eye" id="c_eyeicon"></i>
                    <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" required=""/>
                    <p id="message"></p>
                </div>


                <div className="row">
                    <h3>Seat Type</h3>
                    <i className="fa-solid fa-building-columns"></i>
                    <input type="text" name="seattype" placeholder="Institute level" required=""/>
                </div>


                <div className="radio">
                    <input type="radio" name="fy"/>&nbsp; First year
                    &nbsp;<input type="radio" name="fy"/>&nbsp; Direct Second year
                </div>


                <div className="row button">
                    <input type="submit" onclick="checkPass()" value="Sign up"/>
                </div>
                <footer>
                    <a href="#">www.getflytechnology.com</a>
                </footer>

            </form>
        </div>
    </div>
    <script src="valid.js"></script>



</body>
        </>
    )
}

