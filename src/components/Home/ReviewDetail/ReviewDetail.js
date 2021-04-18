import React, { Component, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './ReviewDetail.css';

const ReviewDetail = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])


        const settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1, 
          autoplay:true
        };
    return (


        <div>

        <Slider {...settings} className="container h-100 mt-5 ">
        {
            reviews.map(review =>
                <div className="d-flex align-items-center">
                   
                    <div>


                    <h1 style={{ color:'#dd7140'}}>{review.name}</h1>
                    <p className=" text-secondary">{review.comment}</p>
                    </div>
                </div>
            )
        }
    </Slider>
      </div>
    );
}



  
export default ReviewDetail;