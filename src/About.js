import React from "react";
import "./About.css";
import "./utils.css";
import { Link } from "react-router-dom";

import { useState } from "react";

function About() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <div className="bg">
        <div className="imgnav">
          <header>
            <nav>
              <div className="navDesktop">
                <div className="flex text-bold items-center logo text-blue">
                  Lucky Fitness
                </div>
                <ul id="navbar" className="navbar flex  items-center">
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
                <div className="flex text-bold items-center logo text-blue">
                  Lucky Fitness
                </div>
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
                <ul className="flex items-center">
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
        </div>

        
          <section className="section">
            <div className=" boxSec  flex items-center">
              <div className="leftbox flex justify-center flex-col ">
                <div className="oneBox">
                  <h2>ABOUT US</h2>
                  <h1>WELCOME TO LUCKY FITNESS</h1>
                  <h3>Get the body you want at the Gym you love</h3>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit id repellendus, deserunt nemo beatae minima voluptate perspiciatis necessitatibus officia dolorum possimus ipsa, placeat itaque iure adipisci iusto dolore ut deleniti dignissimos aperiam labore porro reprehenderit? Dolor quibusdam autem debitis ad, voluptatem asperiores dolores illum odit. Reiciendis eveniet deleniti officia autem illum quia consectetur qui, hic dicta. Et exercitationem qui quia, expedita aspernatur voluptatibus ipsa autem ut sapiente dolor, non quibusdam voluptas temporibus veniam aliquam nam fugiat in sunt architecto molestias blanditiis? Temporibus, voluptatibus? Ab sit quidem consequatur tempore id officiis. Reprehenderit doloremque rem pariatur labore maiores impedit architecto aspernatur, dolores quis repellat cum eaque aut modi. Perferendis unde itaque neque voluptatibus accusamus cupiditate repellat sunt corporis, rem expedita asperiores recusandae iusto eaque.s
                  </p>
                  
                </div>
              </div>
              <div className="rightbox flex justify-center ">
                <img className="gymimg" id="gymimg" src="2wallpaper.jpg" alt="wallpaper" />
              </div>
            </div>
          </section>
        
      </div>
      
    </>
  );
}

export default About;
