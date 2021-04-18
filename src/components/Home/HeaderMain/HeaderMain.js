import React from 'react';
import img from '../../../image/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center w-100 ">
            <div className="col-md-5 offset-md-1 ">
                <h1 style={{color: '#3A4256'}}><span style={{color: '#dd7140'}} >Treat Your</span> <br/> Self</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button style={{backgroundColor:'#497438',color:'white'}}  class="btn header-tran">ORDER FOOD</button>
            </div>
            <div className="col-md-6 header-tran">
                <img  src={img} alt="" className="img-fluid "/>
            </div>
        </main>
    );
};

export default HeaderMain;