import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AutoCarous(){
    return(
        <div className="carousel-container">
        <div
          id="carouselAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://picsum.photos/800/400?random=1"
                className="d-block w-100"
                alt="Image 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/800/400?random=2"
                className="d-block w-100"
                alt="Image 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/800/400?random=3"
                className="d-block w-100"
                alt="Image 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
}

export default AutoCarous;