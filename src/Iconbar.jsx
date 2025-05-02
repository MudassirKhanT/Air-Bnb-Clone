import house from "./assets/house.png";
import beach from "./assets/beach.png";
import camping from "./assets/camping.png";
import city from "./assets/city.png";
import pool from "./assets/pool.png";
import icon from "./assets/icon.png";
import arrow from "./assets/arrow.png";
import sell from "./assets/sell.png";
import filter from "./assets/filter.png";

function Iconbar() {
  return (
    <>
      <div className="mainIcon">
        <div className="multiIcon">
          <img src={house} alt="house" />
          <img src={beach} alt="beach" />
          <img src={camping} alt="camping" />
          <img src={city} alt="city" />
          <img src={pool} alt="pool" />
          <img src={icon} alt="icon" />
          <img src={arrow} alt="arrow" />
          <button className="b1">
            <img src={filter} alt="filter" />
            <span>Filters</span>
          </button>
          <button className="b2">
            <img src={sell} alt="" />
            <span>Prices include for fees</span>
          </button>
        </div>
        <div className="multiText">
          <p>Domes</p>
          <p>Beach</p>
          <p>Camping</p>
          <p>Top Cities</p>
          <p>Pools</p>
          <p>Icons</p>
        </div>
      </div>
    </>
  );
}
export default Iconbar;
