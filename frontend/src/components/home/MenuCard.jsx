import React from "react";
import { motion } from "framer-motion";
const MenuCard = ({ ItemNum, plantSrc, price, title, delay = 0 }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      <div>Item {ItemNum}</div>
      <main>
        <img src={plantSrc} alt="itemNo" />
        <h5>{price} PKR</h5>
        <p>{title}</p>
        <button>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
