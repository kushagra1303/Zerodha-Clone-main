import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggingIn,setLoggingIn] = useState(false);

  const [cursorStyle, setCursorStyle] = useState("default");
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setLoggingIn(true);
      const response = await axios.post("https://zerodha-clone-backend-dmzr.onrender.com/login", {
        email,
        password,
      });
      if (response.status===201) {
        window.location.href = "https://zerodha-clone-landingpage.onrender.com";
      }
    console.log(response);
      setLoggingIn(false);
      setMessage(response.data.message);
        setTimeout(() => {
          setMessage("")
        },10000)

    } catch (error) {
      console.error(error);
      setMessage("Sign In failed!");
    }
  };

  return (
    <div className="container text-center p-5">
      <div className="row">
        <h1
          className=" "
          style={{ fontSize: "3rem", opacity: "0.85", marginTop: "5rem" }}
        >
          {" "}
          Open a free demat and trading account
        </h1>
        <h3
          style={{
            opacity: "0.85",
            fontSize: "1.3rem",
            lineHeight: "1.8rem",
            marginBottom: "2.5rem",
            fontWeight: "400",
          }}
        >
          Start investing brokerage free and join a community of 1+ crore
          investors and traders
        </h3>
      </div>
      <div className="row p-5">
        <div className="col-6 p-5">
          <img
            style={{ height: "47vh", width: "35vw", margin: "0 auto" }}
            src="media/images/account_open.png"
            alt="logo"
          />
        </div>
        <div className="col-6">
          <h2
            className="p-3 mt-5"
            style={{
              opacity: "0.88",
              fontSize: "1.9rem",
              lineHeight: "0rem",
              marginTop: "",
              fontWeight: "550",
            }}
          >
            Log-In 
          </h2>
          <Link to="/signup"
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            style={{
              opacity: "0.85",
              fontSize: "1.2rem",
              lineHeight: "",
              marginBottom: "3rem",
              fontWeight: "400",
              cursor: cursorStyle 
            }}
            className="mb-5"
          >
            {" "}
            Dont have an account?{" "}
            <span style={{ color: "blue", opacity: "0.7" }}>
              Sign Up ...
            </span>{" "}
          </Link>
          <form onSubmit={handleSignIn} style={{  marginTop:"3rem",  display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",width:"17rem",gap:"0.8rem" ,marginLeft:"8.5rem"}}>
            <input 
            style={{
              border: "1px solid black",  
              borderRadius: "5px",
              height:"2.3rem", 
              marginLeft:"1rem"      ,
              padding:"1rem"

            }}
              type="email"
              placeholder="  Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=""
            />
            
            <input
              style={{
                border: "1px solid black",  
                borderRadius: "5px",
                height:"2.3rem"     ,
                marginLeft:"1rem"     ,
                padding:"1rem"
              }}
              type="password"
              placeholder="  Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            {message && (
              <div className="" style={{color:"red",opacity:"0.85"}}>
                {message}
              </div>
            )}

            <button type="submit" className='opacity-75 p-2 mt-3 btn btn-primary fs-5 mb-5' style={{width:"110%",margin:"0 auto"}}>
             {loggingIn ? <i class="fa-solid fa-spinner fa-spin"></i> : "Log in ..."} 
            </button>
            
          </form>
        </div>
      </div>
      <div className="row small text-muted lh-1">
        <p>
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN.
        </p>
        <p>Please visit this article to know more.</p>
        <p>
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the offline forms. For help, click here.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
