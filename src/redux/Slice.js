import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  // Ім'я слайсу
  name: "basket",
  // Початковий стан редюсера слайсу
  initialState: {
    basket: [],
  },
  // Об'єкт редюсерів
  reducers: {
    addToBasket(state, action) {
      //state.favorites = [...state.favorites, action.payload];
      state.basket = [...state.basket, { ...action.payload, quantity: 1 }];
    },
    deleteFromBasket(state, action) {
      state.basket = state.basket.filter((data) => data.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const inBasket = state.basket.find((data) => data.id === id);
      if (inBasket) {
        inBasket.quantity = quantity;
      }
    },
  },
});

// Генератори екшенів
export const { addToBasket, deleteFromBasket, updateQuantity } =
  basketSlice.actions;

// Редюсер слайсу
export const basketReducer = basketSlice.reducer;
