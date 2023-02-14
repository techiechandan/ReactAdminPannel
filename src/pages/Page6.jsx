import React from 'react'
import Sidebar from '../components/Header/Sidebar'
import Navbar from '../components/Header/Navbar'
export const Page6 = () => {
    return (
        <>
            <div className="container-fluid d-flex p-0">
                <Sidebar />
                <div className="container-fluid">
                    <Navbar name="Menu6" />

                    <div className="first-row">
                        <h4 className="text-center mt-5">This is Page6!</h4>
                    </div>
                </div>
            </div>





        </>
    )
}


export default Page6;