//import React from "react";
import currencyArr from "../../data/currency.json";
import PropTypes from "prop-types";
import css from "./Selector.module.css";

const Selector = ({ handleCurrencyRate }) => {
  const onSelectClick = (e) => {
    const { value } = e.currentTarget;
    const key = e.currentTarget.selectedOptions[0].getAttribute("data-key");
    handleCurrencyRate(value, key);
  };
  return (
    <div>
      <select className={css.selector} onChange={onSelectClick}>
        {currencyArr.map(({ name, exchangeRate, currency }) => (
          <option key={name} value={exchangeRate} data-key={name}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

Selector.propTypes = {
  handleCurrencyRate: PropTypes.func,
};
export default Selector;
