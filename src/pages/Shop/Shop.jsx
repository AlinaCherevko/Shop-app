//import React from "react";
import GoodsList from "../../components/GoodsList/GoodsList";
import goods from "../../data/goods.json";
import css from "./Shop.module.css";

const Shop = () => {
  return (
    <div className={css.wrapper}>
      <GoodsList goods={goods} showAddBtn={true} />;
    </div>
  );
};

export default Shop;
