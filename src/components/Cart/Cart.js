import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cart = useSelector((state) => state.items.items);
  console.log(cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((items) => (
          <CartItem
          key={items.id}
            item={{
              
              id: items.id,
              title: items.name,
              quantity: items.totalPrice,
              total: items.totalPrice,
              price: items.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;


//why we can t send http request inside reducers in redux toolkit


// Toolkit are designed to be pure functions, which means they should not have any side effects. 
// Sending an HTTP 
// request is a side effect and therefore cannot be done inside a reducer.

//what are pure functions in redux


// Pure functions in Redux are functions that return the same 
// output for a given input and do not cause any side effects. 
// They are also known as 'deterministic' functions, meaning 
// that they always produce the same output for a given input. 
// Pure functions do not modify the state of the application or
//  have any external 
// side effects, such as making an API call or accessing a database.

//what is thunk in redux toolkit