import { Fragment } from "react";
import MealSummary from "./MealSummary";
import MealMenu from "./MealMenu";

const Meal = function () {
  return (
    <Fragment>
      <MealSummary />
      <MealMenu />
    </Fragment>
  );
};
export default Meal;
