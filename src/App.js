import "./App.css";
import FooterMenu from "./Componentes/Footer/index.js";
import HeaderMenu from "./Componentes/Header/index.js";

// This is the main App component that renders the entire application

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <section className="section">
        <div className="container">
          <div className="box">
            <img src="./images/svg/Round Icons/Ninja.svg" alt="ninja"></img>
            <h2>Título</h2>
            <p>Test</p>
          </div>
          <div className="box">
            <img
              src="./images/svg/Round Icons/Apartment.svg"
              alt="apartment"
            ></img>
            <h2>Título</h2>
            <p>Test</p>
          </div>
          <div className="box">
            <img src="./images/svg/Round Icons/Beach.svg" alt="beach"></img>
            <h2>Título</h2>
            <p>Test</p>
          </div>
          <div className="box">
            <img
              src="./images/svg/Round Icons/Car-Jumper.svg"
              alt="car jumper"
            ></img>
            <h2>Título</h2>
            <p>Test</p>
          </div>
        </div>
      </section>
      <FooterMenu />
    </div>
  );
}

export default App;
