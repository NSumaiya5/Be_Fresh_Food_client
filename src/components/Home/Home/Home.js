import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FoodGallery from '../FoodGallery/FoodGallery';
import Review from '../Review/Review';
import Contact from '../Contact/Contact';
import ChooseUs from '../ChooseUs/ChooseUs';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <FoodGallery></FoodGallery>
            <ChooseUs></ChooseUs>
            <Services></Services>
            <Contact></Contact>
            <Review></Review>
            <Footer></Footer>

           
            
        </div>
    );
};

export default Home;