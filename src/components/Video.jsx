import { IoPlay } from "react-icons/io5";

const Video = (props) => {
    return (
        <>
                <div className="container">
                    <div className="enjoy-row">
                        <p>Enjoy Video</p>
                        {/* <a href="#"><FaPlayCircle /></a> */}
                        <a href="#"><IoPlay /></a>
                    </div>
                </div>
        </>
    )
}

export default Video