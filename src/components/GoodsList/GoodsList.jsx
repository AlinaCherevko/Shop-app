//import React from "react";
import GoodsItem from "../GoodsItem/GoodsItem";
import PropTypes from "prop-types";
import css from "./GoodsList.module.css";

const GoodsList = ({ goods, showQuantityBtn, showAddBtn }) => {
  return (
    <ul className={css.list}>
      {goods.map((item) => (
        <GoodsItem
          key={item.id}
          item={item}
          showQuantityBtn={showQuantityBtn}
          showAddBtn={showAddBtn}
        />
      ))}
    </ul>
  );
};
GoodsList.propTypes = {
  goods: PropTypes.array.isRequired,
  showQuantityBtn: PropTypes.bool,
  showAddBtn: PropTypes.bool,
};
export default GoodsList;
