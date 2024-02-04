import React, { useState } from 'react';
import Lightbox from '../Lightbox/Lightbox';
import post1 from '../../assets/imgs/poert1.png';
import post2 from '../../assets/imgs/port2.png';
import post3 from '../../assets/imgs/port3.png';

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <div className="portfolio m-86 pt-4">
        <div className="vh-md-100 d-flex justify-content-center align-items-center text-sec bg-white">
          <div className="text-center container">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">Portfolio Component</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3 bgSec"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3 bgSec"></div>
            </div>
            <div className="row g-5 mb-4">
              {[post1, post2, post3].map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6" onClick={() => openLightbox(image)}>
                  <div className="pos position-relative overflow-hidden rounded-4">
                    <img src={image} alt={`Post ${index + 1}`} className='w-100 rounded-4' />
                    <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className='text-white fa-solid fa-plus fa-6x'></i>
                    </div>
                  </div>
                </div>
              ))}
              {[post1, post2, post3].map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6" onClick={() => openLightbox(image)}>
                  <div className="pos position-relative overflow-hidden rounded-4">
                    <img src={image} alt={`Post ${index + 1}`} className='w-100 rounded-4' />
                    <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className='text-white fa-solid fa-plus fa-6x'></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {lightboxOpen && <Lightbox src={currentImage} onClose={closeLightbox} />}
    </>
  );
}











// import React, { useState } from 'react';
// import post1 from '../../assets/imgs/port1.png';
// import post2 from '../../assets/imgs/port2.png';
// import post3 from '../../assets/imgs/port3.png';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// export default function Portfolio() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   const images = [post1, post2, post3, post2, post3, post1]; // مصفوفة الصور

//   const openLightbox = (index) => {
//     setPhotoIndex(index);
//     setIsOpen(true);
//   };

//   return (
//     <>
//       <div className="portfolio m-86 pt-4">
//         <div className='vh-md-100 d-flex justify-content-center align-items-center text-sec bg-white'>
//           <div className="text-center container">
//             <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>Portfolio Component</h2>

//             <div className="row g-5 mb-4">
//               {images.map((image, index) => (
//                 <div className="col-lg-4 col-md-6" key={index}>
//                   <div className="pos position-relative overflow-hidden rounded-4" onClick={() => openLightbox(index)}>
//                     <img src={image} alt={`Post ${index + 1}`} className='w-100 rounded-4' />
//                     <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
//                       <i className='text-white fa-solid fa-plus fa-6x'></i>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <Lightbox
//           mainSrc={images[photoIndex]}
//           nextSrc={images[(photoIndex + 1) % images.length]}
//           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
//           onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}

//           reactModalStyle={{ overlay: { zIndex: 1040 } }}
//         />
//       )}
//     </>
//   );
// }














// import React, { useState } from 'react';
// import post1 from '../../assets/imgs/poert1.png'
// import post2 from '../../assets/imgs/port2.png'
// import post3 from '../../assets/imgs/port3.png'



// export default function Portfolio() {
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [lightboxDisplay, setLightboxDisplay] = useState(false);

//   return <>
//   <div className="portfolio m-86 pt-4">
//     <div className='vh-md-100 d-flex justify-content-center align-items-center text-sec bg-white'>
//       <div className="text-center container">
//         <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>portfolio component</h2>
//         <div className="d-flex align-items-center justify-content-center mb-3">
//           <div className="line me-3 bgSec"></div>
//           <i className="fa-solid fa-star"></i>
//           <div className="line ms-3 bgSec"></div>
//         </div>
//         <div className="row g-5 mb-4">
//           <div className="col-lg-4 col-md-6 ">
//             <div className="pos position-relative overflow-hidden rounded-4" onClick={() => {setSelectedImg(post1); setLightboxDisplay(true);}}>
//               <img src={post1} alt="Post 1 " className='w-100 rounded-4' />
//               <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
//                 <i className='text-white fa-solid fa-plus fa-6x' ></i>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 ">
//             <div className="pos position-relative overflow-hidden rounded-4" onClick={() => {setSelectedImg(post2); setLightboxDisplay(true);}}>
//               <img src={post2} alt="Post 2 " className='w-100 rounded-4' />
//               <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
//                 <i className='text-white fa-solid fa-plus fa-6x' ></i>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 ">
//             <div className="pos position-relative overflow-hidden rounded-4" onClick={() => {setSelectedImg(post3); setLightboxDisplay(true);}}>
//               <img src={post3} alt="Post 3 " className='w-100 rounded-4' />
//               <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
//                 <i className='text-white fa-solid fa-plus fa-6x' ></i>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 ">
//             <div className="pos position-relative overflow-hidden rounded-4" onClick={() => {setSelectedImg(post2); setLightboxDisplay(true);}}>
//               <img src={post2} alt="Post 2 " className='w-100 rounded-4' />
//               <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
//                 <i className='text-white fa-solid fa-plus fa-6x' ></i>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 ">
//             <div className="pos position-relative overflow-hidden rounded-4" onClick={() => {setSelectedImg(post3); setLightboxDisplay(true);}}>
//               <img src={post3} alt="Post 3 " className='w-100 rounded-4' />
//               <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
//                 <i className='text-white fa-solid fa-plus fa-6x' ></i>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 ">
//             <div className="pos position-relative overflow-hidden rounded-4" onClick={() => {setSelectedImg(post1); setLightboxDisplay(true);}}>
//               <img src={post1} alt="Post 1 " className='w-100 rounded-4' />
//               <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
//                 <i className='text-white fa-solid fa-plus fa-6x' ></i>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   </div>
//   {lightboxDisplay &&
//   <div className="lightbox" onClick={() => setLightboxDisplay(false)}>
//     <img src={selectedImg} alt="Selected" />
//     <button onClick={() => setLightboxDisplay(false)}>Close</button>
//   </div>
//   }
//   </>
// }
