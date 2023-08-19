import React from 'react';
import dockerIcon from "../../assets/images/landingPage/car1.jpeg"
import image2 from "../../assets/images/landingPage/tata.jpeg"
import image3 from "../../assets/images/landingPage/car3.jpeg"
import image4 from "../../assets/images/landingPage/image4.jpeg"
import image5 from "../../assets/images/landingPage/service.jpeg"
import image6 from "../../assets/images/landingPage/test1.jpg"
import Form from './form';


const Products = () => {
  return (
   <div className='justify-center items-center' style={{ justifyContent: 'center', alignItems: 'center'}}>
   <div>
   <h1 className='text-white text-center'>Services </h1>
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap', gap: '20px', marginBottom: '30px'}}>
     <div style={{
   display: 'flex',
   flexDirection: 'column', 
   alignItems: 'center',
   textAlign: 'center',
 }}>
   <img src={image3} alt="Car 3" width={450} height={320} style={{ display: 'block', margin: 'auto' }} />
   <div style={{ 
     width: '450px',
     height: '220px',
     background: '#DDE8EC',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center'
   }}>
     <p className='text-center'>
     Car sells and Repair
     Our comprehensive range of services includes 
     digital marketing, web development, IT consulting, and training.
      With a mission to empower businesses and create long-lasting partnerships,
     we aim to help our clients navigate the rapidly evolving digital 
     landscape by leveraging cutting-edge 
     technologies and industry best practices
     </p>
     <button className="btn btn-outline-info" style={{ width: '150px' }}>Read More</button>
   </div>
 </div>
     <div style={{
   display: 'flex',
   flexDirection: 'column', 
   alignItems: 'center',
   textAlign: 'center'
     }}>
       <img src={image2} alt="Car 3" width={450} height={300} style={{ display: 'block', margin: 'auto' }} />
       <div style={{ 
         width: '450px',
     height: '220px',
     background: '#DDE8EC',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center'
     }}>
     <p className='text-black text-center'>
     Tata Spareparts and accesories
     We specializes in providing innovative IT 
     solutions and exceptional customer service to businesses 
     of all sizes. Our comprehensive range of services includes 
     digital marketing, web development, 
     </p>
     <button className="btn btn-outline-info" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Read More</button>
     </div>
     </div>
     <div>
       <img src={image4} alt="Car 3" width={450} height={300} style={{ display: 'block', margin: 'auto' }} />
       <div style={{ 
     width: '450px',
     height: '220px',
     background: '#DDE8EC',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center'
     }}>
       <p className='text-black text-center'>
       We specializes in providing innovative IT 
       solutions and exceptional customer service to businesses 
       of all sizes. Our comprehensive range of services includes 
       digital marketing, web development, 
       </p>
       <button className="btn btn-outline-info" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Read More</button>
       </div>
     </div>
     </div>
   </div>
  <div>
  <Form />
  </div>
</div>
  );
}


export default Products;
