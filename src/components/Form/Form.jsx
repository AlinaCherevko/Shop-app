//import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import { basketSelector } from "../../redux/selectors";
import css from "./Form.module.css";

const Form = ({ currency, total }) => {
  const goodsInBasket = useSelector(basketSelector);

  const formSubmit = (e) => {
    e.preventDefault();
    const order = {
      user: {
        name: e.currentTarget.elements.name.value,
        surname: e.currentTarget.elements.surname.value,
        address: e.currentTarget.elements.address.value,
        phone: e.currentTarget.elements.phone.value,
      },
      goods: goodsInBasket,
      date: new Date().toISOString(),
      total,
      currency,
    };

    const inJson = JSON.stringify(order, null, 2);
    console.log(inJson);
    e.currentTarget.reset();
  };
  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={formSubmit}>
        <Input type="text" placeholder="NAME" name="name" />
        <Input type="text" placeholder="SURNAME" name="surname" />
        <Input type="text" placeholder="ADDRESS" name="address" />
        <Input type="text" placeholder="PHONE" name="phone" />
        <button type="submit">ORDER</button>
      </form>
    </div>
  );
};
Form.propTypes = {
  currency: PropTypes.string,
  total: PropTypes.string,
};
export default Form;
