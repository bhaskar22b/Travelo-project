const Trips = (props) => {
    return (
        <div className="trips-col">
            <img src={props.img} />
            <p>{props.title}</p>
            <h2>{props.des}</h2>
            
        </div>
    )
}

export default Trips