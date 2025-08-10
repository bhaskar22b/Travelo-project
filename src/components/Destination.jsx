const Destination = (props) => {
    return (
        <>
            <img src={props.img} />
            <div className="Des-flex">
                <p>{props.title}</p>
                <h2>{props.places}</h2>
            </div>

        </>
    )
}

export default Destination