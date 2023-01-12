import React from "react";
import MenuCard from "./MenuCard";
import croton from "../../assets/croton.jpg";
import philodendron from "../../assets/philodendron.jpg";
import Bamboo from "../../assets/bamboo.jpg";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "bambooPlantIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "crotonPlantIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "philodendronPlantIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "bambooPlantIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };
  return (
    <div>
      <section id="menu">
        <h1>Featured Plants</h1>
        <div>
          <MenuCard
            ItemNum={1}
            plantSrc={croton}
            price={200}
            title={"Croton Plant"}
            delay={0.8}
            handler={addToCartHandler}
          />
          <MenuCard
            ItemNum={2}
            plantSrc={philodendron}
            price={500}
            title={"Philodendron Silver Plant"}
            delay={0.8}
            handler={addToCartHandler}
          />
          <MenuCard
            ItemNum={3}
            plantSrc={Bamboo}
            price={1000}
            title={"Bamboo Plant"}
            delay={0.8}
            handler={addToCartHandler}
          />
        </div>
      </section>
    </div>
  );
};

export default Menu;
