import React from 'react';
import './Coursole.css';
const Coursole = () => {
    return (
        <div className="carousel w-full height">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={"https://as2.ftcdn.net/v2/jpg/02/31/56/61/1000_F_231566167_DcxyiS11UCKdIoFpPdkXFpAzeVhh6qFA.jpg"} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://www.remotelands.com/travelogues/app/uploads/2022/03/Oman-fish-market-1.jpg" className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88rAhit2YAKME4yo384VUJtS3mm2Iszvc_w&usqp=CAU" className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/chef-cook-cutting-beef-meat-with-knife-kitchen-cooking-food-vegetables-spices-kitchen-table-prepare-delicious-lunch_192985-1251.jpg?w=2000" className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Coursole;