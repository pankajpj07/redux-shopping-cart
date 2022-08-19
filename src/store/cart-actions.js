import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      //send state as request
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://rrt-learning-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      //send stata message as successfully
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Data has been store to database successfully",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://rrt-learning-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      console.log(cartData);
      dispatch(cartActions.initiateData(cartData));
    } catch (err) {
      console.log(err);
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};
