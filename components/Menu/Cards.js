import Card from "./Card";
import imgOne from '../../assets/img1.png'
import imgTwo from '../../assets/img2.jpg'
import imgThree from '../../assets/img3.jpg'

const cards = [
    {
        id: 1,
        title: "Portfolio",
        img: imgOne,
        social: '@alfredo-rivas-jimenez'
    },
    {
        id: 2,
        title: "Photography",
        img: imgThree,
        social: '@jirzo_nez'
    },
    {
        id: 3,
        title: "Books",
        img: imgTwo,
        social: 'jirzp_review'
    }
]


const Cards = () => (
  <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
          {cards.map(element => 
        <div className="col-md-4" key={element.id}>
          <Card  title={element.title} img={element.img} social={element.social} />
        </div>
        )}
      </div>
  </div>
);

export default Cards;
