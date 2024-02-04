import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return <>
  <footer>
    <div className={`${style.footer}`}>
      <div className="row m-4 py-4">
        <div className="col-md-4 py-3">
          <div className="card-body text-center m-3">
            <h3 className='fs-3'>LOCATION</h3>
            <p className='lead'>2215 John Daniel Drive</p>
            <p className='lead'>Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-md-4 py-3">
          <div className="card-body text-center m-3">
            <h3 className='fs-3'>AROUND THE WEB</h3>
            <div className="icons">
              <i className={`fa-brands fa-facebook mx-1 ${style.icon}`}></i>
              <i className={`fa-brands fa-twitter mx-1 ${style.icon}`}></i>
              <i className={`fa-brands fa-linkedin-in mx-1 ${style.icon}`}></i>
              <i className={`fa-solid fa-globe mx-1 ${style.icon}`}></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3">
          <div className="card-body text-center m-3">
            <h3 className='fs-3'>ABOUT FREELANCER</h3>
            <p className='lead'> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
          </div>
        </div>
      </div>
    </div>
    <div className={style.p}>
      <p className='pt-2 lead'>Copyright © Your Website 2021</p>
    </div>
</footer>
</>
}
