import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstt from './firstt.jpg'
function HeroCarousel() {
  return (
    <div className="container-fluid p-0">
      <Carousel interval={2000} controls={true} indicators={false} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px", objectFit: "cover" }}
            src={firstt}
            alt="Nature Landscape"
          />
        </Carousel.Item>
        <Carousel.Item>     
          <img
            className="d-block w-100"
            style={{ height: "500px", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNhc3RsZXxlbnwwfHx8fDE2ODAwNTU5NjQ&ixlib=rb-1.2.1&q=80&w=1920"
            alt="Castle at Sunset"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJhbGl8ZW58MHx8fHwxNjgwMDYxNjQ0&ixlib=rb-1.2.1&q=80&w=1920"
            alt="Mountain and Lake"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
