import React from 'react'


const ServiceCard = ({data, serviceIndex}) => {
  return (
    <div> 
        {data[serviceIndex].map(item => (
            <div className='card' key ={serviceIndex}>
                <div className='service-title'>
                  <h2>{item.title}</h2>
                </div>
                <div className='service-description' >
                  <p>{item.description}</p>
                </div>
                <div className='service-time'>
                  <p><strong>Procedure Time: </strong> {item.time}</p> 
                </div>
                <div className='service-time'>
                  <p><strong>Recovery Time: </strong> {item.dtime}</p> 
                </div>
                <div className='service-price'>
                  <p>Price:  {item.price}</p>
                </div>
            </div>
        ))}
  </div>
  )
}

export default ServiceCard