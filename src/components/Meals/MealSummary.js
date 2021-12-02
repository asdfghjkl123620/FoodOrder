import styles from './MealSummary.module.css';

const MealSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>美味的食物，送到你家</h2>
            <p>從我們的菜單中，選擇你最喜歡的餐點，在家中享受佳餚</p>
            <p>只要碗裡滿滿的，人生就不會空虛</p>         
        </section>
    )
};
export default MealSummary;