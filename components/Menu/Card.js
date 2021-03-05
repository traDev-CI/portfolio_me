
const Card = ({id, title, img, social}) =>(
    <div className="profile-card-2" onClick={ () => console.log("HOLA")}>
            <img className="img img-responsive img-fluid" src={img}  alt="Image one" />
            <div className="profile-name">{title}</div>
            <div className="profile-username">{social}</div>
    </div>
)

export default Card;