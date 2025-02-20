// 
import React from "react";

function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-center gap-2">
            <img style={{ height: "20vh", width: "35%" }} 
                 src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1739555035215.jpg?crsl_pos=4" 
                 alt="..." />
            <img style={{ height: "20vh", width: "35%" }} 
                 src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1739201760193.jpg?crsl_pos=4" 
                 alt="..." />
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center gap-2">
            <img style={{ height: "20vh", width: "35%" }} 
                 src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1737985162422.jpg?crsl_pos=4" 
                 alt="..." />
            <img style={{ height: "20vh", width: "35%" }} 
                 src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1739555035215.jpg?crsl_pos=4" 
                 alt="..." />
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
