import MealSummary  from "./MealSummary";
import AvaiableMeals from "./AvaiableMeals";
import { Fragment } from "react";

const Meal = props => {
    return <Fragment>
        <MealSummary/>
        <AvaiableMeals/>
    </Fragment>
};
export default Meal;