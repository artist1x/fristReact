import React, { useState } from 'react';

export default function Contact() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <>
      <div className="contact">
        <div className='vh-100 m-115 text-sec bg-white'>
          <div className="all-cont">
            <div className="text-center">
              <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>Contact Section</h2>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line me-3 bgSec"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line ms-3 bgSec"></div>
              </div>
            </div>
            <form>
              <div className="w-50 p-3 mx-auto mt-5" style={{width: '100%'}}>
                <label htmlFor="userName" className={`position-relative top-0 ${userName ? '' : 'top'} label`}>userName : </label>
                <input
                  id="userName"
                  type="text"
                  placeholder="userName"
                  name="userName"
                  className="form-control border-0 border-bottom mb-3 py-3 position-relative"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor="userAge" className={`position-relative top-0 ${userAge ? '' : 'top'} label`}>userAge : </label>
                <input
                  id="userAge"
                  type="number"
                  placeholder="userAge"
                  name="userAge"
                  className="form-control border-0 border-bottom mb-3 py-3 position-relative"
                  value={userAge}
                  onChange={(e) => setUserAge(e.target.value)}
                />
                <label htmlFor="userEmail" className={`position-relative top-0 ${userEmail ? '' : 'top'} label`}>userEmail : </label>
                <input
                  id="userEmail"
                  type="email"
                  placeholder="userEmail"
                  name="userEmail"
                  className="form-control border-0 border-bottom mb-3 py-3 position-relative"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <label htmlFor="userPassword" className={`position-relative top-0 ${userPassword ? '' : 'top'} label`}>userPassword : </label>
                <input
                  id="userPassword"
                  type="password"
                  placeholder="userPassword"
                  name="userPassword"
                  className="form-control border-0 border-bottom mb-3 py-3 focus-0 position-relative"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <button className='bgMain mt-3 py-2 px-3 border-0 rounded-2 text-white '>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}




