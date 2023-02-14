import React from 'react'
import {BsSearch } from "react-icons/bs"


const Searchbox = () => {
    return (
        <>
            <form method="">
                <div className="input-field">
                    <button className="border-0 m-0 p-0" type="submit">
                    <BsSearch className="search-btn" />
                    </button>
                    <input type="text" className="Serachbox" placeholder="Type here" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </form>
        </>
    )
}

export default Searchbox;
