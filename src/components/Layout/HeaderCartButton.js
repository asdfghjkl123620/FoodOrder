import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = props => {
    const [btnIsHighLighted,setbtnIsHighLighted] = useState(false);

    const ctx = useContext(CartContext);

    const { items } = ctx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnStyles = `${styles.button} ${btnIsHighLighted ? styles.bump : ''}`;

    
    useEffect(() => {
        console.log("useEffect Run");
        if (items.length === 0) {
            return;
        }
        setbtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setbtnIsHighLighted(false);

        },300);

        return () => {
            console.log("cleaer");
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnStyles} onClick={props.onClickCard}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>購物車</span>
            <span className={styles.badgenum}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;