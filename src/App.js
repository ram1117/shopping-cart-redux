import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { calculateTotals } from './features/cart/cartSlice';

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
};

export default App;
