import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {cartItems.map((item) => {
            const { id, price, totalPrice, name, quantity } = item;
            return (
              <CartItem
                id={id}
                price={price}
                quantity={quantity}
                total={totalPrice}
                name={name}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
