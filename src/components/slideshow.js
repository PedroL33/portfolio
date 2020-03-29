import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slideshow(props) {
    return (
        <div>
            <Carousel>
                {props.images.map(item => 
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={window.location.origin + '/images/' + item + '.png'}
                        alt="First slide"
                        />
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
}

export default Slideshow;