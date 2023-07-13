import classes from "./MealMenu.module.css";
import MealItems from "./MealItems";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.8,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const mealItems = DUMMY_MEALS.map((item) => (
  <MealItems
    key={item.id}
    id={item.id}
    name={item.name}
    description={item.description}
    price={item.price.toFixed(2)}
  />
));

const MealMenu = function () {
  const preventSubmitHandler = function (e) {
    e.preventDefault();
  };

  return (
    <form onSubmit={preventSubmitHandler}>
      <div className={classes.menu}>
        <ul>{mealItems}</ul>
      </div>
    </form>
  );
};

export default MealMenu;
