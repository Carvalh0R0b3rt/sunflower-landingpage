import DrawerMenu from "../Drawer";
import "./AppHeader.css";


const HeaderMenu = () => {
  return (
    <header className="Header">
      <div className="headerBar">
        <img
          src="./images/preview(1).png"
          alt="logo"
          className="cloudy"
        ></img>
        <div className="headerMenu">
          <ul className="list1">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="headerDrawer">
          <DrawerMenu />
        </div>
      </div>
      <img
        src="./images/girl-flowers.jpeg"
        alt="headerImg"
        className="headerIMG"
      ></img>
    </header>
  );
};

export default HeaderMenu;
