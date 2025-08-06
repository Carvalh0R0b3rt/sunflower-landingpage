import "./AppHeader.css";

const HeaderMenu = () => {
  return (
    <header className="Header">
       <img
          src="./images/svg/Icons/Cloudy.svg"
          alt="cloudy"
          className="cloudy"
        ></img>
      <h1>
         Sunflower
      </h1>
      <div className="headermenu"> </div>
      <img
        src="./images/girl-flowers.jpeg"
        alt="headerImg"
        className="headerIMG"
      ></img>
    </header>
  );
};

export default HeaderMenu;
