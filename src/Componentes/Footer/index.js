import "./AppFooter.css";

const FooterMenu = () => {
  return (
    <footer className="Footer">
      <div className="footercontainer">
        <div className="footerLogo">
          <div className="cloudyfooter">
            <h3>
              {" "}
              <img
                src="./images/svg/Icons/Cloudy.svg"
                alt="cloudy"
                className="cloudyFooter"
              ></img>
              Sunflower
            </h3>
          </div>
          <div className="SocialMedia">
            <a href="#">
              <img src="./images/svg/Round Icons/alien.svg"></img>Facebook
            </a>
            <a href="#">
              <img src="./images/svg/Round Icons/alien.svg"></img>Instagram
            </a>
            <a href="#">
              <img src="./images/svg/Round Icons/alien.svg"></img>TikTok
            </a>
          </div>
        </div>

        <div className="linha-horizontal"></div>

        <div className="footerLinks">
          <div className="footerpages">
            <div className="footerbox">
              <h4>Footer Title</h4>
              <p>
                <a href="#">Link 1</a>
              </p>

              <p>
                <a href="#">Link 2</a>
              </p>

              <p>
                <a href="#">Link 3</a>
              </p>

              <p>
                <a href="#">Link 4</a>
              </p>
            </div>

            <div className="footerbox">
              <h4>Footer Title</h4>
              <p>
                <a href="#">Link 1</a>
              </p>

              <p>
                <a href="#">Link 2</a>
              </p>

              <p>
                <a href="#">Link 3</a>
              </p>

              <p>
                <a href="#">Link 4</a>
              </p>
            </div>

            <div className="footerbox">
              <h4>Footer Title</h4>
              <p>
                <a href="#">Link 1</a>
              </p>

              <p>
                <a href="#">Link 2</a>
              </p>

              <p>
                <a href="#">Link 3</a>
              </p>

              <p>
                <a href="#">Link 4</a>
              </p>
            </div>
          </div>
          <div className="RightMenu">
            <div className="FooterNav">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
            <div className="AboutUs">
              <a href="#">Carrers</a>
              <a href="#">Values</a>
              <a href="#">Locations</a>
              <a href="#">Delivery Status</a>
              <a href="#">FAQs</a>
            </div>
          </div>
        </div>
      </div>
      <p>© 2023 Sunflower. All rights reserved.</p>
    </footer>
  );
};

export default FooterMenu;
