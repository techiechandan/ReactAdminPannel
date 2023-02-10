import React, { useState } from 'react'
import Sidebar from '../components/Header/Sidebar'
import Navbar from '../components/Header/Navbar'
import Chart from "react-apexcharts";
import Profile from "../images/Trainner.jpg";
import { AiFillCloud, AiFillMessage, AiFillInfoCircle, AiFillStar } from "react-icons/ai";


// configuring chart


const cardItem = [
  {
    icon: <AiFillCloud className="d-card-icon align-middle me-4 text-success" />,
    title: "Some-text",
    value: "42%"
  },

  {
    icon: <AiFillMessage className="d-card-icon align-middle me-4 text-danger" />,
    title: "Some-text",
    value: "40km"
  },

  {
    icon: <AiFillInfoCircle className="d-card-icon align-middle me-4 text-danger" />,
    title: "Some-text",
    value: "230km"
  },

  {
    icon: <AiFillCloud className="d-card-icon align-middle me-4 text-warning" />,
    title: "Some-text",
    value: "42%"
  }
];



const buttomCard = [
  [
    {
      image: { Profile },
      name: "Persion1",
      role: "Role",
      possition: "Possition",
      rating: "4.5"
    },
    {
      image: { Profile },
      name: "Persion2",
      role: "Role",
      possition: "Possition",
      rating: "4.5"
    },
    {
      image: { Profile },
      name: "Persion3",
      role: "Role",
      possition: "Possition",
      rating: "4.5"
    },
  ],
  [
    {
      image: { Profile },
      name: "Peresion4",
      role: "Role",
      possition: "Possition",
      rating: "4.5"
    },
    {
      image: { Profile },
      name: "Persion5",
      role: "Role",
      possition: "Possition",
      rating: "4.5"
    },
    {
      image: { Profile },
      name: "Persion6",
      role: "Role",
      possition: "Possition",
      rating: "4.5"
    },
  ]
]

export const Dashboard = () => {
  const [state, setSate] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })


  const SibeBarData = [
    {
      photo: { Profile },
      title: "Card title",
      description: "his content is a dummy description."
    },
    {
      photo: { Profile },
      title: "Card title",
      description: "his content is a dummy description."
    },
    {
      photo: { Profile },
      title: "Card title",
      description: "his content is a dummy description."
    },
    {
      photo: { Profile },
      title: "Card title",
      description: "his content is a dummy description."
    },
  ]



  return (
    <>
      <div className="container-fluid d-flex p-0">
        <Sidebar />
        <div className="container-fluid">
          <Navbar name="Dashboard" />


          <div className="row  mt-5">
            <div className="col-md-6 col-12">
              <div className="row gy-4">
                {
                  cardItem.map((item) => (
                    <div className="col-md-6 col-12">
                      <div className="card shadow px-5 py-4 align-middle">
                        <div className="d-flex">
                          <span >
                            {item.icon}
                          </span>
                          <span className="d-card-content align-middle ">
                            <p className="p-0 m-0 fw-bold">{item.title}</p>
                            <p className="fs-2 fw-bold p-0 m-0">{item.value}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-md-6 col-12 text-center mt-md-0 mt-4">
              <div className="card shadow py-3 px-5 ">
                <h4>Chart Title</h4>
                <span>Some text will be placed here</span>
                <Chart
                  options={state.options}
                  series={state.series}
                  type="line"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-9 col-12">
              <div className="row mb-sm-4">
                <div className="col-md-12 col-12">
                  <div className="card shadow border-0">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner  top-carousel">
                        {
                          buttomCard.map((cardList) => (
                            <div className="carousel-item active bg-light">
                              <div className="row justify-content-center ">
                                {
                                  cardList.map((card) => (
                                    <div className="col-3  my-4 ">
                                      <div className="card shadow border-0">
                                        <img src={Profile} className="card-img rounded-circle px-4 py-4" alt="..." />
                                        <div className="card-body text-center text-secondary">
                                          <h5 className="card-title m-0 p-0 text-dark fw-bold">{card.name}</h5>
                                          <p class="card-text">{card.role}</p>
                                          <div className="d-flex justify-content-between fw-bold">
                                            <div className="align-middle pb-2">
                                              <span className="text-warning fs-2 me-2">
                                                <AiFillStar />
                                              </span>
                                              <span className="text-primary fs-6">
                                                {card.rating}
                                              </span>
                                            </div>
                                            <span className="text-primary fs-6 pt-3">{card.possition}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))
                                }
                              </div>
                            </div>
                          ))
                        }
                      </div>
                      <div className="carousel-inner d-md-none down-carousel">
                        {
                          buttomCard.map((cardList) => (
                            cardList.map((card) => (
                              <div className="carousel-item active bg-light">
                                <div className="row justify-content-center ">
                                  <div className="col-8  my-4 ">
                                    <div className="card shadow border-0">
                                      <img src={Profile} className="card-img rounded-circle px-4 py-4" alt="..." />
                                      <div className="card-body text-center text-secondary">
                                        <h5 className="card-title m-0 p-0 text-dark fw-bold">{card.name}</h5>
                                        <p class="card-text">{card.role}</p>
                                        <div className="d-flex justify-content-between fw-bold">
                                          <div className="align-middle pb-2">
                                            <span className="text-warning fs-2 me-2">
                                              <AiFillStar />
                                            </span>
                                            <span className="text-primary fs-6">
                                              {card.rating}
                                            </span>
                                          </div>
                                          <span className="text-primary fs-6 pt-3">{card.possition}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ))
                        }
                      </div>
                      <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-12 col-12">
                  <div className="card shadow p-5">
                    <Chart
                      options={state.options}
                      series={state.series}
                      type="bar"
                      height="auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="card px-2 py-4">
                <h4>Right Sidebar</h4>
                {
                  SibeBarData.map((item) => (
                    <div className="card mb-3 pt-4 px-2 border-0 shadow" >
                      <div className="row gy-2 justify-content-start">
                        <div className="col-md-4 text-center">
                          <img src={Profile} className="img-fluid rounded-2" alt="..." style={{ height: "100%" }} />
                        </div>
                        <div className="col-md-8 align-middle ms-0 ps-0">
                          <div className="card-body">
                            <h5 className="card-title my-0 py-0">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center fw-bold">
                        <div className="align-middle me-5 pb-3">
                          <span className="text-warning fs-2 me-2">
                            <AiFillStar />
                          </span>
                          <span className="text-primary fs-6">
                            demo
                          </span>
                        </div>
                        <div className="align-middle pb-3">
                          <span className="text-warning fs-2 me-2">
                            <AiFillStar />
                          </span>
                          <span className="text-primary fs-6">
                            demo
                          </span>
                        </div>
                      </div>
                    </div>

                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
