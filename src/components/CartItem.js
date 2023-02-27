import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';

const CartItem = (
  // eslint-disable-next-line
  props) => {
  const dispatch = useDispatch();
  const {
    // eslint-disable-next-line
    id, img, title, price, amount } = props.item;
  return (
    <article className="cartitem-container">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button type="button" onClick={() => dispatch(removeItem(id))} className="remove-btn">remove</button>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(increase({ id }))} className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          type="button"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
          className="amount-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
