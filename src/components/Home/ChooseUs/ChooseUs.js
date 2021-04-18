import React from 'react';
import './ChooseUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRuler, faCertificate } from '@fortawesome/free-solid-svg-icons';
import learn from '../../../image/why.jpg';


const ChooseUs = () => {
    return (
        <section className="fluid-container mt-5 mb-5" >
            <div className=" text-center ">
                <h1 className="fw-bolder mt-5 text-brand"style={{color: '#dd7140'}}>Why You Choose Us</h1>
                
            </div>
            <div className="container mt-5 d-flex align-items-center">
                <div className=" row">
                    <div className="col-md-6 col-sm-12">
                        <h2 className=" fw-bold">Lorem ipsum dolor sit amet.</h2>
                        <p className="underline mt-2"></p>

                        <p className="mt-5 text-secondary mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi ducimus aliquid sapiente sunt accusamus blanditiis perspiciatis veniam dicta sint! In quos tempora ipsam maxime.</p>

                        <p className=" fw-4"><FontAwesomeIcon icon={faRuler} className="text-brand  mx-2" /> Lorem, ipsum dolor.</p>
                        <p className=" fw-4"><FontAwesomeIcon icon={faCertificate} className="text-brand mx-2" /> Certification Awarded</p>

                        <button style={{backgroundColor:'#497438', color:'white'}}className="border-gradient-green mt-5 p-2"> New Item</button>
                    </div>

                    <div className="col-md-6  d-flex  px-5 mt-5 mb-4">
                    
                                <img src={learn} alt="" className="w-100 rounded img-shadow " style={{height:'350px',width:'500px'}} />
                            </div>
                            
                    </div>
                </div>
        
        </section>
    );
};

export default ChooseUs;
