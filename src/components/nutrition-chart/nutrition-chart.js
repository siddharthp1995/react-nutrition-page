import react from "react";
import "./nutrition-chart.scss";

class NutritionChart extends react.Component {
  state = {
    nutritionArray: [
      {
        name: "Total fat",
        amount: "0.3g",
        value: "0%",
      },
      {
        name: "Saturated fat",
        amount: "0.1g",
        value: "0%",
      },
      {
        name: "Sodium",
        amount: "1mg",
        value: "0%",
      },
      {
        name: "Total Carbohydrate",
        amount: "23g",
        value: "8%",
      },
      {
        name: "Dietary Fiber",
        amount: "2.6g",
        value: "9%",
      },
      {
        name: "Sugar",
        amount: "12g",
        value: "",
      },
      {
        name: "Protein",
        amount: "1.1g",
        value: "2%",
      },
      {
        name: "Vitamin D",
        amount: "0.00mcg",
        value: "0%",
      },
      {
        name: "Calcium",
        amount: "5.00mg",
        value: "0%",
      },
      {
        name: "Iron",
        amount: "0.26mg",
        value: "1%",
      },
      {
        name: "Potassium",
        amount: "358mg",
        value: "8%",
      },
    ],
  };

  render() {
    const { nutritionArray } = this.state;

    return (
      <div className="Chart__wrapper">
        <div className="Chart__calories">
          <div className="Chart__calories-title">Calories</div>
          <div className="Chart__calories-amount">89</div>
        </div>
        <div className="Chart__daily-value">% Daily value *</div>
        <div className="Chart__content">
          {nutritionArray.map((nutrition) => {
            return (
              <div
                className={
                  "Chart__content-wrap " +
                  (nutrition.name === "Protein" ||
                  nutrition.name === "Potassium"
                    ? "partition"
                    : null)
                }
                key={nutrition.name}
              >
                <div>
                  <b>{nutrition.name}</b>
                  <span>{nutrition.amount}</span>
                </div>
                <div className="Chart__content-value">
                  <b>{nutrition.value}</b>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NutritionChart;
