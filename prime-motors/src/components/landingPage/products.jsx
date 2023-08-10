import React from 'react';
import dockerIcon from "../../assets/images/landingPage/car1.jpeg"
import image2 from "../../assets/images/landingPage/car2.jpeg"
import image3 from "../../assets/images/landingPage/car3.jpeg"
import image4 from "../../assets/images/landingPage/image4.jpeg"

const Products = () => {
  return (
   <div className='justify-center items-center' style={{ justifyContent: 'center', alignItems: 'center'}}>
  <h1 className='text-white text-center'>Our Services</h1>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap', gap: '20px', marginBottom: '30px'}}>
    <div>
      <img src={dockerIcon} alt="Car 1" width={400} height={400} style={{ display: 'block', margin: 'auto' }} />
      {/*<h4 className='text-white'>Car Model 1</h4>*/}
      <div style={{ textAlign: 'center'}}>
      <p className='text-white'>Year: 2012</p>
      <p className='text-white'>Mileage: 10,000 miles</p>
      <p className='text-white'>Price: $1.5ksh</p>
      <button className="btn btn-outline-info">Contact Us</button>
      </div>
    </div>
    <div>
      <img src={image4} alt="Car 2" width={400} height={400} style={{ display: 'block', margin: 'auto' }} />
      {/*<h4 className='text-white'>Car Model </h4>*/}
      <div style={{ textAlign: 'center'}}>
      <p className='text-white'>Year: 2011</p>
      <p className='text-white'>Mileage: 15,000 miles</p>
      <p className='text-white'>Price: $700, 000ksh</p>
      <button className="btn btn-outline-info">Contact Us</button>
      </div>
    </div>
    <div>
      <img src={image3} alt="Car 3" width={400} height={400} style={{ display: 'block', margin: 'auto' }} />
      {/*<h4 className='text-white'>Car Model 3</h4>*/}
            {/*<h4 className='text-white'>Car Model 3</h4*/}
      <div style={{ textAlign: 'center'}}>
      <p className='text-white'>Year: 2023</p>
      <p className='text-white'>Mileage: 5,000 miles</p>
      <p className='text-white'>Price: $300,000ksh</p>
      <button className="btn btn-outline-info">Contact Us</button>
      </div>
    </div>
    <div>
      <img src={image3} alt="Car 3" width={400} height={400} style={{ display: 'block', margin: 'auto' }} />
      {/*<h4 className='text-white'>Car Model 3</h4*/}
      <div style={{ textAlign: 'center'}}>
      <p className='text-white'>Year: 2023</p>
      <p className='text-white'>Mileage: 5,000 miles</p>
      <p className='text-white'>Price: $550,000ksh</p>
      <button className="btn btn-outline-info">Contact Us</button>
      </div>
    </div>
  </div>
</div>
  );
}

export default Products;
