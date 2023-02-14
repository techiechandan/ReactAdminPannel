import React from 'react'
import Sidebar from '../components/Header/Sidebar'
import Navbar from '../components/Header/Navbar'
export const Page2 = () => {
  return (
    <>
      <div className="container-fluid d-flex p-0">
        <Sidebar />
        <div className="container-fluid">
          <Navbar name="Menu2"/>
          <div className="first-row">
            <h4 className="text-center mt-5">This is Page2!</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page2;
