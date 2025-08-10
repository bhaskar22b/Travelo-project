import { GrInstagram } from "react-icons/gr";
import { MdOutlinePhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = (props) => {
    // console.log(props.navv);
    return (
        <>
            <section className="header">
                <div className=".container-fluid">
                    <div className="flex">
                        <div className="logo">
                            <img src={props.navv.logo.src} />
                        </div>
                        <div className="navbar">
                            {/* <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Destination</a></li>
                <li><a href="#">pages</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}
                            <ul>
                                {
                                    // props.navv.links.map((item) => <li><a href={item.link}>{item.label}</a></li>)
                                    props.navv.links.map((item) => <li><a href="#">{item.label}</a></li>)
                                }
                            </ul>
                        </div>
                        <div className="number">
                            <MdOutlinePhone />
                            <h3>10(256)-928 256</h3>
                        </div>
                        <div className="social-Icon">
                            <GrInstagram />
                            <FaLinkedinIn />
                            <ImFacebook />
                            <IoLogoGoogleplus />
                        </div>
                        <div className="search-btn">
                            <FaSearch />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavBar