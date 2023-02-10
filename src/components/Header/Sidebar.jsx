import { NavLink } from "react-router-dom"
import { FaHome } from "react-icons/fa"
// import { AiOutlineAlignLeft } from "react-icons/ai"
import {BsList} from "react-icons/bs"
import { AiFillGithub, AiOutlineWindows } from "react-icons/ai";



import { useState } from "react"

const menus = [
    {
        path: "/",
        name: "Dashboard",
        icon: <AiOutlineWindows />
    },
    {
        path: "/page2",
        name: "Menu2",
        icon: <FaHome />
    },
    {
        path: "/page3",
        name: "Menu3",
        icon: <FaHome />
    },
    {
        path: "/page4",
        name: "Menu4",
        icon: <FaHome />
    },
    {
        path: "/page5",
        name: "Menu5",
        icon: <FaHome />
    },
    {
        path: "/page6",
        name: "Menu6",
        icon: <FaHome />
    },
];

const Sidebar = () => {
    const [IsOpen, SetIsOpen] = useState(true);

    const toggle = ()=>{
        SetIsOpen(!IsOpen);
    }

    return (
        <>
            <div className="min-vh-100 shadow" style={{ width:IsOpen?"22rem":"5rem" ,transition:"0.3s"}} >
                <div className="container d-flex justify-content-between mt-3 fs-5 text-primary wrap-element">
                    {
                    IsOpen && 
                        <span className="ms-2">
                            <AiFillGithub className="fs-3 me-3 mb-1d " />
                            <span className="fw-bold">BrandName</span>
                        </span>
                    }
                    <span className="me-4 fs-4 ms-3 cursor-pointer">
                        <BsList onClick={toggle}/>
                    </span>
                </div>
                <div className="container-fluid m-0 p-0 mt-4">
                    {IsOpen && <span className="fs-5 ms-4 fw-bold text-secondary wrap-element">Main Menu</span>}
                    {
                        menus.map((menu) => (
                            <NavLink to={menu.path} key={menu.name} activeClassName="active" className= "menu d-block text-decoration-none px-3 mb-2 rounded-start ms-2 wrap-element">
                                <div className="contianer-fluid p-0 m-0 navlinks">
                                <span className="fs-4 me-3">
                                    {menu.icon}
                                </span>
                                {IsOpen && <span className="fs-5">
                                    {menu.name}
                                </span>}
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar;