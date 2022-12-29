import React from "react";

import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return <Carousel variant="dark">
    <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
          alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.rd.com/wp-content/uploads/2019/09/Cute-cat-lying-on-his-back-on-the-carpet.-Breed-British-mackerel-with-yellow-eyes-and-a-bushy-mustache.-Close-up-e1573490045672.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://live.staticflickr.com/8109/8555966777_d7a90d583f_b.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
}

export default Slider