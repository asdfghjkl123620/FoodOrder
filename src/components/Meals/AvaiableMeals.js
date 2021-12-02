import dummyData from './dummy.json';
import styles from './AvaiableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';



const AvaiableMeals = () => {
    console.log(dummyData);
    const dinnerList = dummyData.items.map(dinner => <MealItem
                                                        id={dinner.id}
                                                        key={dinner.id}  
                                                        name={dinner.name} 
                                                        description={dinner.description} 
                                                        price={dinner.price}
                                                    />);
    return(
        <section className={styles.dinner}>
            <Card>
            <ul>
                {dinnerList}
            </ul>
            </Card>
       
        </section>
    );
};

export default AvaiableMeals;