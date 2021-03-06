import { useContext } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = props => {
    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartContext.addItem({...item, amount:1});
    };

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map((item) => (
                           <CartItem
            
                           key={item.id}
                           name={item.name}
                           amount={item.amount}
                           price={item.price}       
                           onRemove={cartItemRemoveHandler.bind(null, item.id)}   
                           onAdd={cartItemAddHandler.bind(null, item)}
                           />
            )
        )}</ul>);
    return (<Modal onOutside={props.onClose}>
        {cartItems}
        <div className={styles.total}>
            <span>總數</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>
                關閉
            </button>
            {hasItems && <button className={styles.button}>訂</button>}
        </div>
    </Modal>)
};

export default Cart;