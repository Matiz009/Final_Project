import React from "react";
import { Link } from "react-router-dom";
import { TbPlant } from "react-icons/tb";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../styles/colors.scss";

const Header = ({ isAuthenticated = false }) => {
  return (
    <div>
      <nav>
        <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
          <TbPlant />
          <b>plantzhub.com</b>
        </motion.div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">
            <FiShoppingCart />
          </Link>
          <Link to={isAuthenticated ? "/me" : "/login"}>
            {isAuthenticated ? <FaUser /> : <FiLogIn />}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
