import { IoMdStar } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

const Places = (props) => {
    return (
        <>

            <img src={props.img}/>
            <div className="place-info">
                <h3>{props.placeName}</h3>
            <p>{props.cityName}</p>
            <div className="rating-days">
                <div className="rating">
                    <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><span>{props.rating}</span>
                </div>
                <div className="days">
                    <FaRegClock /><span>{props.days}</span>
                </div>
            </div>
            </div>
            <div className="cost">
                <a href="#">{props.cost}</a>
            </div>



        </>
    )
}

export default Places