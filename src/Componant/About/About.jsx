import React from 'react'


export default function About() {
  return <>
  <div className="home ">
    <div className='vh-100 d-flex justify-content-center align-items-center text-white bgMain'>
        <div className="text-center container">
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>about component</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-5 text-start">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-5 text-start">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
    </div>
  </div>
  
  </>
}
