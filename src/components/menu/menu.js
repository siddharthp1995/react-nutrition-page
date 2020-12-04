import NutritionChart from '../nutrition-chart/nutrition-chart';
import './menu.scss';

const Menu = () => {
    return (
        <div className="App__menu">
            <div className="App__menu-list">
                <div className="App__menu-header">
                    <p>Nutrition Facts</p>
                    <div className="App__menu-header-option1">
                        <div className="App__menu-header-serving">Serving Size</div>
                        <div className="App__menu-header-size">100g</div>
                    </div>
                    <div className="App__menu-header-option2">Amount per serving</div>
                </div>
                <NutritionChart />
            </div>
        </div>
    );
};

export default Menu;