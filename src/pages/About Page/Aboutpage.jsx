import React from "react";
import myimg from "../../assets/aboutimg.jpg";
import "./Aboutpage.css";
import { FaShoppingBag, FaTruck, FaAward, FaHeadset } from "react-icons/fa";
function Aboutpage() {
  return (
    <div className="About">
      <div className="about-head">
        <h1>Everything you need, All in One Place: Meet LUNERA</h1>
        <p>Everything you need, All in One Place</p>
      </div>
      <div className="about-content">
        <div className="about-content-img">
          <img src={myimg} alt="" />
        </div>

        <div className="about-content-text">
          <h3>Redefining Your Everyday Shopping Experience</h3>

          <p>
            At <strong>LUNERA</strong>, we believe shopping should be
            effortless, inspiring, and accessible. Founded with a vision to
            deliver premium quality products across fashion, accessories, and
            everyday essentials, we carefully curate items that combine
            functionality with elegance.
          </p>

          <p>
            Our mission is to bring you top-tier collections that match your
            unique style while providing a seamless digital shopping experience
            from start to finish. Everything you need, all in one place.
          </p>
        </div>
      </div>
      <div className="about-content-why-us">
        <h3>Why Choose Us</h3>

        <div className="about-content-why-us-divs">
          <div className="card">
            <FaShoppingBag size={40} className="icon" />
            <h3>Curated Collections</h3>
            <p>Expertly selected goods just for you.</p>
            <button>Learn More</button>
          </div>

          {/* Card 2 */}
          <div className="card">
            <FaTruck size={40} />
            <h3>Fast & Secure Delivery</h3>
            <p>Your items, safe and on time.</p>
            <button>Learn More</button>
          </div>

          {/* Card 3 */}
          <div className="card">
            <FaAward size={40} />
            <h3>Premium Quality</h3>
            <p>Guaranteed standards you can trust.</p>
            <button>Learn More</button>
          </div>

          {/* Card 4 */}
          <div className="card">
            <FaHeadset size={40} />
            <h3>Dedicated Support</h3>
            <p>We're here for you, 24/7.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
