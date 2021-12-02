import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onOutside}></div>
};

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>

    )
};

const portalElm = document.getElementById('overlay');


const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onOutside={props.onOutside}/>,portalElm)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElm)}
        </Fragment>
    );
};

export default Modal;
