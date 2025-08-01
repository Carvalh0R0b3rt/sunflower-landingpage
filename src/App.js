import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header">
          <h1> <img src='./images/svg/Icons/Cloudy.svg' alt='cloudy' className='cloudy'></img>Sunflower</h1>
          <div className="headermenu"></div>
          <img src='./images/girl-flowers.jpeg' alt='headerImg'></img>
      </header>
      <section className="section">
        <div className='container'>
        <div className="box">
          <img src='./images/svg/Round Icons/Ninja.svg' alt='ninja'></img>
          <h2>Título</h2>
          <p>Test</p>
        </div>
        <div className="box">
          <img src='./images/svg/Round Icons/Apartment.svg' alt='apartment'></img>
          <h2>Título</h2>
          <p>Test</p>
        </div>
        <div className="box">
          <img src='./images/svg/Round Icons/Beach.svg' alt='beach'></img>
          <h2>Título</h2>
          <p>Test</p>
        </div>
        <div className="box">
          <img src='./images/svg/Round Icons/Car-Jumper.svg' alt='car jumper'></img>
          <h2>Título</h2>
          <p>Test</p>
        </div>
        </div>
      </section>
      <footer className="Footer">
        <div className='container'>
           <div className="footerbox">
            <h3>Footer Title</h3>
           </div>
        </div>
        <p>© 2023 Sunflower. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
