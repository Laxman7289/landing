import { Link } from "react-router-dom";
import "./App.css";
import "./utils.css";
import "./About.js";
import "./Contact.js";
import { useState } from "react";

function Data() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto over-flow">
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
              <div className="flex text-bold items-center logo text-blue">Lucky Fitness</div>
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
               <img   src="cancel.svg" alt="cross" />
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

        <main className="min-h-screen">
          <section className="section1">
            <div className="flex items-center">
              <div className="topleft flex justify-center flex-col px-2">
                <div className="text-center">
                  <img className="dumbbell" src="Dumbbel.png" alt="dumbbell" />
                </div>
                <h1 className="my-1 text-center">
                  The Best Fitness <strong>GYM</strong> in the Town Here
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  ipsa quod illo voluptas magnam nobis nostrum, non amet
                  commodi. Rerum commodi labore non aspernatur voluptate nulla.
                  Molestiae, expedita explicabo voluptatum sequi ipsam saepe
                  nesciunt dolorum, deleniti, quasi nisi illum facilis
                  recusandae id ad assumenda sunt asperiores corporis fugit
                  iure! Odio aut sequi obcaecati distinctio autem earum
                  pariatur, ullam architecto dolorem.
                </p>
              </div>
              <div id="topright" className=" flex justify-center topright">
                <img className="gymimage" src="gym.png" alt="gym" />
              </div>
            </div>
          </section>
          <section className="section2">
            <h1 className="text-center my-2">Pricing</h1>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, vitae? Dolorum in fugiat omnis totam quos iure.
              Aliquam repellat veniam sit quasi repellendus quia optio eaque
              dolore nulla blanditiis illo, quaerat iste odit et. Perferendis
              placeat eum, molestias earum itaque maiores quaerat.
            </p>
            <div className="boxes flex justify-center">
              <div className="box">
                <h2>Free</h2>
                <ul>
                  <li className="highlighted">₹0/month</li>
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                  <li>
                    <button className="btn">Join Now</button>
                  </li>
                </ul>
              </div>
              <div className="box">
                <h2>Pro</h2>
                <ul>
                  <li className="highlighted">₹150/month</li>
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                  <li>
                    <button className="btn">Get started</button>
                  </li>
                </ul>
              </div>
              <div className="box">
                <h2>Enterprise</h2>
                <ul>
                  <li className="highlighted">₹500/month</li>
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                  <li>
                    <button className="btn">Contact us</button>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="section3">
            <h1 className="text-center my-2">Compare Plans</h1>
            <div className="container plantable">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th></th>
                    <th>Free</th>
                    <th>Pro</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="text-start">
                      Public
                    </th>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Private
                    </th>
                    <td>-</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th scope="row" className="text-start">
                      Permissions
                    </th>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Sharing
                    </th>
                    <td>-</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Unlimited members
                    </th>
                    <td>-</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Extra security
                    </th>
                    <td>-</td>
                    <td>-</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
        <hr />
        <footer>Copyright &copy; LuckyFitness.com | All rights reserved</footer>
      </div>
    </>
  );
}

export default Data;
