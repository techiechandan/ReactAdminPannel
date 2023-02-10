import { AiFillBell, AiFillCalendar, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle, BsSearch } from "react-icons/bs"


const Navbar = (props) => {
    return (
        <>
            <nav className="container-fluid d-flex justify-content-between mt-1 align-center shadow py-2 Navbar">
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                    <span className="fs-4 fw-bold">
                        {props.name}
                    </span>
                </div>

                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                    <form method="POST">
                        <div className="input-field">
                            <BsSearch className="search-btn mt-2" />
                            <input type="text" className="Serachbox" placeholder="Type here" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </form>
                </ul>
                <ul className="d-flex justify-contentn-between list-unstyled mb-2 mb-lg-0">
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