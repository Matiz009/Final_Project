import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/me.jpeg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>plantzhub.com</h4>
          <p>
            We are plantzhub.com. The place which can provide you best and most
            beautiful plants for your place.
          </p>

          <p>
            Explore the various type of indoor and outdoor plants. Click below
            to see the list
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Mati ul Rehman</h3>
            </div>

            <p>
              I am Mati ul Rehman, the founder of plantzhub.com.My main purpose
              is to provide you best plants.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
