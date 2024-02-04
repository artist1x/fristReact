import React from 'react'
import home from '../../assets/imgs/avataaars.svg'


export default function StartFramwork() {
  return <>
  <div className="home">
    <div className='vh-100 d-flex justify-content-center align-items-center text-white bgMain'>
      <div className="card-home text-center">
        <img src={home} alt="Avatar Home" className='w-70 mb-5' />
        <div className="text-center">
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start Framework</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
            <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </div>
  </div>
  
  
  </>
}
