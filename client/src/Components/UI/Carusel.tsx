import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel(): JSX.Element {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    {/* <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}> */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        prevIcon={
          <span
            className="carousel-control-prev-icon"
            style={{ filter: 'invert(1)', backgroundColor: 'black' }}
          />
        }
        nextIcon={
          <span
            className="carousel-control-next-icon"
            style={{ filter: 'invert(1)', backgroundColor: 'black' }}
          />
        }
      >
        <Carousel.Item>
          <img
            style={{ height: '500px', width: '100%', objectFit: 'cover' }}
            className="d-block w-100"
            src="/image/3.jpg"
            alt="First Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '500px', width: '100%', objectFit: 'cover' }}
            className="d-block w-100"
            src="https://mayak.travel/m/picture/8/58/1240x520.dfcfb20029c8bcd5ac6c3525afb3d970c376ebb7f254b7edf7bda9045a5e1e4a.png"
            alt="Second Slide"
          />
        </Carousel.Item>
      </Carousel>
    {/* </Container> */}
    </div>
  );
}

export default ControlledCarousel;