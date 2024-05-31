//import React from "react";
import { useSelector } from "react-redux";
import { basketSelector } from "../../redux/selectors";
import GoodsList from "../../components/GoodsList/GoodsList";
import Form from "../../components/Form/Form";
import PropTypes from "prop-types";
import Selector from "../../components/Selector/Selector";
import { useState } from "react";
import css from "./Basket.module.css";

const Basket = () => {
  const [value, setValue] = useState(1);
  const [currency, setCurrency] = useState("UAN");
  const goodsInBasket = useSelector(basketSelector);

  const totalPrice = goodsInBasket.reduce((prevValue, item) => {
    return prevValue + +item.price * item.quantity;
  }, 0);

  const handleCurrencyRate = (value, currency) => {
    setValue(value);
    setCurrency(currency);
  };
  const total = totalPrice * value;

  return (
    <div className={css.basket}>
      <h2 className={css.title}>Your basket</h2>
      {goodsInBasket.length > 0 ? (
        <>
          <div className={css.wrapper}>
            <GoodsList goods={goodsInBasket} showQuantityBtn={true} />
            <Form currency={currency} total={total.toFixed(2)} />
          </div>
          <div className={css.currencyWrapper}>
            <h2 className={css.total}>TOTAL: {total.toFixed(2)}</h2>
            <Selector handleCurrencyRate={handleCurrencyRate} />
          </div>
        </>
      ) : (
        <p>There are no goods in your basket</p>
      )}
    </div>
  );
};
Basket.propTypes = {
  totalPrice: PropTypes.number,
};
export default Basket;
