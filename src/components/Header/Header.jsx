//import React from "react";
import { useSelector } from "react-redux";
import { basketSelector } from "../../redux/selectors";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  const goodsInBasket = useSelector(basketSelector);
  const totalPrice = goodsInBasket.reduce((prevValue, item) => {
    return prevValue + +item.price * item.quantity;
  }, 0);
  return (
    <header className={css.siteHeader}>
      <NavLink className={css.headerNavigation} to="/">
        Goods
      </NavLink>
      <div className={css.wrapper}>
        <NavLink className={css.headerNavigation} to="/cards">
          <img src="./cart.svg" alt="basket" />
        </NavLink>
        {goodsInBasket.length > 0 && (
          <p className={css.total}>{totalPrice.toFixed(2)} ₴</p>
        )}
      </div>
    </header>
  );
};

export default Header;
