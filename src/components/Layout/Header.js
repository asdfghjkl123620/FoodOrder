import {Fragment} from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>創造食積</h1>
                <HeaderCartButton onClickCard={props.onCard}/>
            </header>
            <div className={styles["main-img"]}>
                <img alt="桌上布滿美味食物" src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
            </div>
        </Fragment>
    );
};

export default Header;