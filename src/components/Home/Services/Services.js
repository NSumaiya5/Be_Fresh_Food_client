import React, { useEffect, useState } from 'react';
import food1 from '../../../image/s1.jpg';
import food2 from '../../../image/s2.jpg';
import food3 from '../../../image/s3.jpg';


import ServiceDetail from '../ServiceDetail/ServiceDetail';

// const serviceData = [
//     {
//         name: 'Fish Fry',
//         img: food1,
//         price: 5
//     },
//     {
//         name: 'Tai Soup',
//         img: food2,
//         price: 4
//     },
//     {
//         name: 'Chicken Mixed',
//         img: food3,
//         price: 3
//     }
// ]



const Services = () => {
    
const [services, setServices] = useState([])
useEffect(() => {
    fetch('https://morning-reef-31954.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
}, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 className="mt-5"style={{color: '#dd7140'}}>OUR SPECIAL OFFER</h2>
                <h5>The process of our service</h5>
            </div>
            <div className="d-flex justify-content-center service-area">
            <div className="w-75 row mt-5 pt-5">
                {
                    services.map(service => <ServiceDetail service={service} ></ServiceDetail>)
                }
            </div>
            </div>
        </section>
    );
};

export default Services;