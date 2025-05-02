import airBnb from "./assets/airbnbName.jpg";
import globe from "./assets/globe.png";
import menu from "./assets/menu.png";
import user from "./assets/user.png";
function Header() {
  return (
    <>
      <div className="head1">
        <div className="left">
          <img src={airBnb} alt="airbnb" height={"70px"} width={"100px"} />
        </div>
        <div className="center">
          <a href="">Homes</a>
          <button>Experiences</button>
        </div>
        <div className="right">
          <button>Airbnb your home</button>
          <img className="globe" src={globe} alt="globe" />
          <button className="icons">
            <img src={menu} alt="menu" />
            <img src={user} alt="user" />
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
