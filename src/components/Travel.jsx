const Travel = (props) => {
    return (
        <>
                    <div className="area">
                        <img src={props.img} />
                        <p>{props.title}</p>
                        <h2>{props.des}</h2>
                    </div>
        </>
    )
}

export default Travel