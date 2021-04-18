import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact  py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h3 style={{ color:'#dd7140'}} >Contact</h3>
                    <h1>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group mb-2 p-2 bg-secondary">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group mb-2 p-2 bg-secondary">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group  p-2 bg-secondary ">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder=" Your Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                       <button style={{ color:'white'}} className="btn bg-secondary  p-2 mt-3">Submit</button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;