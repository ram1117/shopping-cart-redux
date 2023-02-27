import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Cart</h2>
          <h4>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
      <footer>
        <h4>
          Total :
          <span>{total}</span>
        </h4>
        <button type="button">Clear Cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
