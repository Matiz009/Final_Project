import React from "react";
import { motion } from "framer-motion";
import myPic from "../../assets/me.jpeg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div>
      <section className="founder">
        <motion.div {...options}>
          <img src={myPic} alt="Founder" height={200} width={200} />
          <h3>Mati ul Rehman</h3>
          <p>
            Hey, Everyone I am Mati ul Rehman, the founder of plantzhub.com.
            <br />
          </p>
          Our aim is to provide best and most beautiful plants for your houses.
        </motion.div>
      </section>
    </div>
  );
};

export default Founder;
