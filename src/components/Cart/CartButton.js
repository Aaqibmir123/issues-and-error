import classes from './CartButton.module.css';
import { cartActions } from '../store/cartSlice';


import { useDispatch, useSelector } from 'react-redux';
const CartButton = () => {
 const cartQuantity =  useSelector((state)=>state.items.totalQuantity);
  const dispatch = useDispatch();

  const cartHandler=()=>{
    dispatch(cartActions.toggle());
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge} >{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
