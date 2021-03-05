import Card from "./Card";

const Cards = () => (
  <div className="container d-flex justify-content-center align-items-center h-100 bg-info">
    <div className="">
      <div className="row">
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
