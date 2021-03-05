import imgOne from '../../assets/img1.jpg'
import imgTwo from '../../assets/img2.png'
import imgThree from '../../assets/img3.jpg'
const Card = () =>(
    <div className="card">
        <img className="img-fluid" src={imgOne} alt="Image one" />
        <div className="card-body">
            <h4 className="card-title">My title</h4>
            <p className="card-text text-secondary">Aute minim sunt duis reprehenderit quis id. Eiusmod minim cillum nisi ex adipisicing incididunt dolor adipisicing fugiat occaecat aliqua. Sit duis non et nulla labore ipsum.</p>
        </div>
    </div>
)

export default Card;