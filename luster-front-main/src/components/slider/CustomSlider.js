"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
const CustomSlider = () =>{
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const photoService = [

        {
            "itemImageSrc": "13.jpg",
            "thumbnailImageSrc": "13.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        }
        ,
        {
            "itemImageSrc": "3.jpg",
            "thumbnailImageSrc": "3.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "12.png",
            "thumbnailImageSrc": "12.png",
            "alt": "Description for Image 1",
            "title": "Title 1"
        }
        ,
        {
            "itemImageSrc": "11.jpg",
            "thumbnailImageSrc": "11.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "10.jpg",
            "thumbnailImageSrc": "10.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "14.jpg",
            "thumbnailImageSrc": "14.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "15.jpg",
            "thumbnailImageSrc": "15.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "16.jpg",
            "thumbnailImageSrc": "16.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "17.jpg",
            "thumbnailImageSrc": "17.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "18.jpg",
            "thumbnailImageSrc": "18.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "19.jpg",
            "thumbnailImageSrc": "19.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        }
    ];

    const itemTemplate = (item) => {
        return <img className="h-auto sm:h-[500px] rounded-lg" src={`https://www.tehranch.com/image/`+item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img className="h-auto sm:h-[500px] rounded-lg" src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }}  />;
    }

    return (
        <div className="w-full ">
            <Galleria value={photoService} numVisible={5} circular className="w-auto" showItemNavigators
                      showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} autoPlay transitionInterval={2000}/>
        </div>
        /*
        * test amir 2
        * */
    )
}

export default CustomSlider;

/*changes from ali*/