import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    
    const ourAddress = [
        {name: "New York - 101010 Hudson"},
        {name: "Yards"},
       
    ]
    const OurService= [
        {name: "BreakFast" , link: "/food"},
        {name: "Lunch" , link: "/food"},
        {name: "Dinner" , link: "/food"},
        {name: "Bangali Food" , link: "/food"},
        {name: "Fruits" , link: "/fruit"},
    ]
    const Gallery = [
        {name: "Kacchi Biriyani" , link: "/food"},
        {name: "Mashala tikka" , link: "/food"},
        {name: "Beef curry" , link: "/food"},
        {name: "Bangali Food" , link: "/food"},
        {name: "Fruits" , link: "/fruit"},
    ]
    return (
        <footer className="footer-area ">
            <div className="container  pt-5">
                <div className="row py-4 justify-content-center">
                
                    <FooterCol key={2} menuTitle="Services" menuItems={OurService}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={Gallery}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 ms-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center ">
                    <p className="text-white">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;