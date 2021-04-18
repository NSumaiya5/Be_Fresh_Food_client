import React from 'react';
import './GalleryCard.css'




const GalleryCard = ({ info }) => {
    return (
        <div className="container mt-2 mb-5 col-md-4">
        <div class="card card-design" style={{ width: "20rem", height:"25rem" }}>
            <div>
            <img src={info.image} style={{ width: "100%", height:"20rem" }} alt="..." />
                <h3 class="card-title "style={{color: '#3A4256'}}>{info.title}</h3>
            </div>
        </div>

        </div>
   

    );
};

export default GalleryCard;