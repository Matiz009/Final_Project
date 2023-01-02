import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>plantzhub.com</h2>
        <p>We are trying to give you the best plants.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>plantzhub.com</strong>
      </div>
      <aside>
        <h4>Follow us </h4>
        <a href="http://youtube.com/plantzhub.com">
          <AiFillYoutube />
        </a>
        <a href="http://instagram.com/plantzhub.com">
          <AiFillInstagram />
        </a>
        <a href="http://facebook.com/plantzhub.com">
          <AiFillFacebook />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
