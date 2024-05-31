//import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  deleteFromBasket,
  updateQuantity,
} from "../../redux/Slice";
import { basketSelector } from "../../redux/selectors";
import css from "./GoodsItem.module.css";

const GoodsItem = ({ item, showQuantityBtn, showAddBtn }) => {
  const { id, name, price, quantity } = item;

  const dispatch = useDispatch();
  const goodsInBasket = useSelector(basketSelector);

  const inBasket = goodsInBasket.some((item) => {
    return item.id === id;
  });

  const handleClick = () => {
    if (inBasket === false) {
      dispatch(addToBasket(item));
    }
    return;
  };

  const handleDecreaseBtn = () => {
    if (quantity === 1) {
      dispatch(deleteFromBasket(id));
    }

    dispatch(updateQuantity({ id, quantity: quantity - 1 }));
  };

  const handleIncreaseBtn = () => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };
  return (
    <li className={css.item}>
      <div>
        <h2 className={css.name}>{name}</h2>
        <p className={css.price}>{price} ₴</p>
      </div>
      {showAddBtn && (
        <button
          disabled={inBasket}
          className={css.button}
          onClick={handleClick}
        >
          Add
        </button>
      )}
      {showQuantityBtn && (
        <div className={css.btnWrapper}>
          <button type="button" onClick={handleDecreaseBtn}>
            -
          </button>
          <p className={css.quantity}>{quantity}</p>
          <button type="button" onClick={handleIncreaseBtn}>
            +
          </button>
        </div>
      )}
    </li>
  );
};

GoodsItem.propTypes = {
  item: PropTypes.object.isRequired,
  showQuantityBtn: PropTypes.bool,
  showAddBtn: PropTypes.bool,
  quantity: PropTypes.number,
};

export default GoodsItem;
