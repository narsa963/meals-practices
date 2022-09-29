import { Fragment } from "react";
import MealsMenu from "./MealsMenu";
import MealsSumery from "./MealsSummery";

const Meals =()=>{
  return (
    <Fragment>
        <MealsSumery />
        <MealsMenu />
    </Fragment>
  )
}
export default Meals;