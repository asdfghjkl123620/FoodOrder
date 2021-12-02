import {useRef,useState} from "react";
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if(enteredAmount.trim().length === 0 || 
        enteredAmountNum < 1 || 
        enteredAmountNum > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNum);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
             ref={amountInputRef}
             label="數量"
             input={
                 {
                     id:'amount_' + props.id,
                     type:'number',
                     min:'1',
                     max:'10',
                     step:'1',
                     defaultValue:'1' 
                 }
             }/>
            <button>+加入</button>
            {!amountIsValid && <p>請輸入有效的值(1-5)</p>}
        </form>
    )
};

export default MealItemForm;