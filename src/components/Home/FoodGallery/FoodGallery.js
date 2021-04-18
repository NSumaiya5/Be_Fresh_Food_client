
import React from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';
import image1 from '../../../image/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';
import image2 from '../../../image/photo-1476718406336-bb5a9690ee2a.jpg';
import image3 from '../../../image/photo-1484723091739-30a097e8f929.jpg';
import image4 from '../../../image/g5.jpg';
import image5 from '../../../image/g2.jpg';
import image6 from '../../../image/g6.jpg';


const infosData = [
    {
        title: 'Salted Egg',
        image:image1

    },
    {
        title: 'Sooting Soup',
        image:image2
        
    },
    {
        title: 'French Toast',
        image:image3
    },
    {
        title: 'Steak Dinner',
        image:image4

    },
    {
        title: 'Honey Bred',
        image:image5
        
    },
    {
        title: 'Cake Raspberries',
        image:image6
    }
    
]
const FoodGallery = () => {
    return (

            
        <div className="text-center mt-5">

        <h2 style={{color: '#3A4256'}} className="mt-5">Be Fresh Fast Food </h2>
        <h3 style={{color: '#dd7140'}}>Gallery</h3>
    
        <section className="d-flex justify-content-center gallery-area mt-4 mb-5">
            <div className="w-75 row">
                {
                    infosData.map(info => <GalleryCard info={info} key={info.title}></GalleryCard>)
                }

            </div>

            
        </section>
        </div>
        
    );
};


export default FoodGallery;
























