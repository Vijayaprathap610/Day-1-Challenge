import React from 'react'
import { useState } from 'react';
import "../components/Image.css"

function ImageGallery() {
    const images = [
        "https://a-z-animals.com/media/2023/01/shutterstock_785960119-1024x1024.jpg",
        "https://m.media-amazon.com/images/I/81HN61m9yYL.png",
        "https://cdn.britannica.com/92/152292-050-EAF28A45/Bald-eagle.jpg",
        "https://st.depositphotos.com/1506042/1785/i/450/depositphotos_17851517-stock-photo-sumatran-tiger.jpg",
        "https://t4.ftcdn.net/jpg/15/92/23/73/360_F_1592237327_zX61DOJP0pMvxkExTes5bDv1GNLwovb6.jpg",
        "https://files.worldwildlife.org/wwfcmsprod/images/Indian_elephant_bathing_08.10.2012_Species/hero_small/thcxue91x_HI_47311.jpg"
    ];

    const title = ["ScarFace Lion", "Leopard", "Eagle", "Tiger", "Wolf", "Elephant"];

    const paragraph = [
        " who lived in the Mara National Reserve in Kenya. The Masai lion was known for his distinctive scar above his left eye.",
        "The leopard's fur is generally soft and thick, notably softer on the belly than on the back",
        "An eagle is a large, powerful bird of prey known for its keen eyesight, strong wings, and heavy head and beak, with a distinctive direct and fast flight",
        "The tiger (Panthera tigris) is a large cat and a member of the genus Panthera native to Asia. It has a powerful, muscular body with a large head and paws.",
        "Wolves are the largest members of the dog family. Adaptable gray wolves are by far the most common and were once found all over the Northern Hemisphere.",
        "Elephants are the largest land mammals on earth and have distinctly massive bodies, large ears, and long trunks"


    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="container text-center mt-5">
            <h2 className="mb-4">WILD ANIMALS</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <img
                            src={images[currentIndex]}
                            alt={`Gallery ${currentIndex}`}
                            className="img-fluid rounded shadow mb-3"
                            style={{ maxHeight: '800px', objectFit: 'cover', overflow: 'hidden',  }}

                        />

                        <div className="card-body">
                            <h3 className="card-title"  > {title[currentIndex]}</h3>
                            <p className="card-text"  >{paragraph[currentIndex]}</p>

                        </div>


                    </div>


                    <div className="d-flex justify-content-center gap-3 mt-3">
                        <button className="btn btn-primary " onClick={goToPrevious}>
                            ⬅ Previous
                        </button> 
                        <button className="btn btn-success" onClick={goToNext}>
                            Next ➡
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery