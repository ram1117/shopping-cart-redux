import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';

const CartItem = (
  // eslint-disable-next-line
  props) => {
  const {
    // eslint-disable-next-line
    id, img, title, price, amount } = props.item;
  return (
    <article className="cartitem-container">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button type="button" className="remove-btn">remove</button>
      </div>
      <div>
        <button type="button" className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button type="button" className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
