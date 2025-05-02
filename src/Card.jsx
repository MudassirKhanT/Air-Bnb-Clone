function Card(props) {
  return (
    <>
      <div className="template">
        <img src={props.hotel} alt="hotel1" />
        <div className="up">
          <div className="left">
            <p>{props.address}</p>
          </div>
          <div className="right">
            <img src={props.rating} alt="star" />
            <p>{props.rate}</p>
          </div>
        </div>
        <div className="down">
          <p>{props.distance}</p>
          <p>{props.date}</p>
          <span>{props.price}</span>
          <p>{props.duration}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
