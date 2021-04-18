import React from 'react';
import { useHistory } from 'react-router';

const ServiceDetail = ({ service }) => {
    
    const history=useHistory()
    const handleChoose=(_id)=>{
        history.push(`/order/${_id}`)
    }
    console.log('service')
    return (
        <div className="col-md-4 text-center mb-5">
        
        <div class="card card-design" style={{ width: "20rem", height:"35rem" }}>
             <div>
             {
                service.image ? <img style={{ width: "19.7rem", height: "18rem" }} src={`data:image/png;base64,${service.image.img}`} alt=""/>
                    :
                    <img style={{ width: "19.7rem", height: "18rem" }} className="img-fluid mb-3" src={`https://morning-reef-31954.herokuapp.com/${service.img}`} alt="" />
            }
            
            
            <h4 className="mt-3 mb-3">{service.title}</h4>
            <h3>${service.price}</h3>
            <p>{service.description}</p>
            <button  onClick={()=>handleChoose(service._id)} style={{backgroundColor:'#497438', color:'white'}} className="btn p-3 mt-5">ORDER NOW</button>
            </div>
            
        </div>
        </div>
        
    
        
    );
};

export default ServiceDetail;