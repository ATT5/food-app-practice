import { Fragment } from "react";

import classes from "./Header.module.css";
import mealImg from "../assets/meal.jpg";

import HeaderButton from "./HeaderButton";

const Header = function (props) {
  return (
    <Fragment>
      <header className={classes.Header}>
        <h1>React-Eats</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
