import "./Contact.css";
import { Link } from "react-router-dom";
// import "./utils.css";
import "./Contact.js";
import { useState } from "react";

const Contact = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [action, setAction]=useState("Sign Up")

  return (
    <>
      <div className="bgimg ">
        <header>
          <nav>
            <div className="navDesktop">
              <div className="flex text-bold items-center logo text-blue">
                Lucky Fitness
              </div>
              <ul id="navbar" className="navbar flex items-center">
                <li>
                  <Link to="/">
                    Home <span></span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    About <span></span>
                  </Link>
                </li>
                <li>
                  <Link to="/Contact">
                    Contact Us <span></span>
                  </Link>
                </li>
                <li>
                  <button className="btn">Join Now</button>
                </li>
              </ul>
            </div>
            <div className="navMobile">
              <div className="">Lucky Fitness</div>
              <button
              className="sbtn rbtn"
                type="button"
                onClick={() => setSideBarOpen((prev) => !prev)}
              >
             <img src="menu.svg" alt="menu" />
              </button>
            </div>
          </nav>
          {sideBarOpen && (
            <nav className="SIDEBAR">
              <button
                className="rbtn"
                type="button"
                onClick={() => setSideBarOpen((prev) => !prev)}
              >
                <img src="cancel.svg" alt="cross" />
              </button>
              <ul className="flex minibox items-center">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="About">About</a>
                </li>
                <li>
                  <a href="Contact">Contact Us</a>
                </li>
                <li>
                  <button className="btn">Join Now</button>
                </li>
              </ul>
            </nav>
          )}
        </header>

        <div className="logbox">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
              <img src="name.png" alt="name" />
              <input type="text" placeholder="UserName" />
            </div>}
           
            <div className="input">
              <img src="email.png" alt="email" />
              <input type="email" placeholder="Email I'd" />
            </div>
            <div className="input">
              <img src="password.png" alt="password" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          {action==="Sign Up"?<div></div>:<div className="forget-password">
            Forget-password <span>Click Here!</span>
          </div>}
          
          <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit" } onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
          </div>
        </div>
         
      </div>
    </>
  );
};

export default Contact;
