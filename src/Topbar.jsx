import search from "./assets/search.png";
function Topbar() {
  return (
    <>
      <div className="container">
        <div className="c">
          <div className="first">
            <span>Where</span>
            <input type="text" placeholder="Search destination" />
          </div>
          <div className="second">
            <span>Check in</span>
            <input type="text" placeholder="Add dates" />
          </div>
          <div className="third">
            <span>Who</span>
            <input type="text" placeholder="Add guests" />
          </div>
          <img src={search} alt="search" />
        </div>
      </div>
    </>
  );
}
export default Topbar;
