import classes from "./MealSummary.module.css";

const MealSummary = function () {
  return (
    <section className={classes.summary}>
      <h2>Reac-Eats Delivery </h2>
      <p>
        Introducing React Eats, the ultimate food delivery app. Hungry? With
        just a few taps, enjoy a wide selection of mouthwatering meals delivered
        to your door in no time. It's fast, convenient, and sure to satisfy your
        cravings. Download React Eats now and dig in!
      </p>
    </section>
  );
};

export default MealSummary;
