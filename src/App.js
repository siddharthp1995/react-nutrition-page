import "./App.scss";
import fruit from "./image/image-fruit.png";
import Header from "./components/header/header";
import Menu from "./components/menu/menu.js";
import Footer from "./components/footer/footer.js";

function App() {
  return (
    <div className="App">
      <div className="App__page-container">
        <Header />
        <img src={fruit} alt="fruit" className="App__image" />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

export default App;
