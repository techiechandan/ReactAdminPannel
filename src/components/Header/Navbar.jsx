import { AiFillBell, AiFillCalendar, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs"
import Searchbox from "../Searchbox";

const Navbar = (props) => {
    return (
        <>
            <nav className=" container-fluid d-flex justify-content-between align-center border-bottom pt-3 pb-2 Navbar">
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                    <span className="fs-4 fw-bold">
                        {props.name}
                    </span>
                </div>

                <ul className="navbar-nav navbar-searchbox ms-auto me-auto mb-2 mb-lg-0">
                    <Searchbox />
                </ul>
                <ul className="d-flex justify-md-contentn-between justify-start  list-unstyled mb-2 mb-lg-0">
                    <li className="nav-item ms-4">
                        <span className=" position-relative">
                            <AiFillBell className="fs-2 text-primary" />
                            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-warning border border-light rounded-circle">

                            </span>
                        </span>
                    </li>
                    <li className="nav-item ms-4">
                        <span className=" position-relative">
                            <AiFillCalendar className="fs-2 text-primary" />
                            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-warning border border-light rounded-circle">

                            </span>
                        </span>
                    </li>
                    <li className="nav-item ms-4">
                        <span className=" position-relative">
                            <AiOutlineShoppingCart className="fs-2 text-primary" />
                            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-warning border border-light rounded-circle">

                            </span>
                        </span>
                    </li>
                    <li className="nav-item ms-4 text-start text-align-center d-flex">
                        <span className="align-middle">
                            <BsPersonCircle className="fs-2 text-primary" />
                        </span>

                        <span className="username badge text-wrap text-dark" >
                            <span className="fs-6">Username <span className="text-secondary fw-light">sometext</span> </span>
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;