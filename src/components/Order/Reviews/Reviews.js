import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import NavbarDashboard from '../../Dashboard/NavbarDashboard/NavbarDashboard';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';




const Reviews = () => {
    const [info, setInfo] = useState({});
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        
        formData.append('name', info.name);
        formData.append('comment', info.comment);

        fetch('https://morning-reef-31954.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="fluid-container">
<NavbarDashboard></NavbarDashboard>
            <div className="row  mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className=" col-md-10 p-4 mx-auto">
                    <h1 className="border-bottom mb-2">Reviews</h1>
                    <form class="row g-3 bg-secondary shadow mt-5 p-5 rounded container shadow" onSubmit={handleSubmit}>
                        <div className="col-md-12">
                            <label class="form-label fw-bolder text-white">Name</label>
                            <input type="text" name="name" onBlur={handleBlur} class="form-control" placeholder="Enter Name" />
                        </div>
                        
                        <div className="col-md-12">
                            <label class="form-label fw-bolder text-white">Comments</label>
                            <textarea type="text" onBlur={handleBlur} name="comment" class="form-control" style={{height:'15vh'}} placeholder="comment" />
                        </div>

                        <div className="col-md-12 d-flex align-items-center">
                            <input type="submit" className="mt-3 btn btn-success" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Reviews;