import React from "react";
import MenuCard from "./MenuCard";
import croton from "../../assets/croton.jpg";
import philodendron from "../../assets/philodendron.jpg";
import Bamboo from "../../assets/bamboo.jpg";

const Menu = () => {
  const addToCartHandler = (ItemNum) => {};
  return (
    <div>
      <section id="menu">
        <h1>MENU</h1>
        <div>
          <MenuCard
            ItemNum={1}
            plantSrc={croton}
            price={1000}
            title={"Croton Plant"}
            delay={0.1}
            handler={addToCartHandler}
          />
          <MenuCard
            ItemNum={2}
            plantSrc={philodendron}
            price={2000}
            title={"Philodendron Silver Plant"}
            delay={0.5}
            handler={addToCartHandler}
          />
          <MenuCard
            ItemNum={3}
            plantSrc={Bamboo}
            price={3000}
            title={"Bambo Plant"}
            delay={0.8}
            handler={addToCartHandler}
          />
        </div>
      </section>
    </div>
  );
};

export default Menu;
