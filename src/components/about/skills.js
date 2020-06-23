import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Skills() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
        <div className="skill-item">
          <div className="skill-img" style={{backgroundImage: `url(${window.location.origin}/images/skills/1.png)`}}></div>
          <div className="skill-desc">
            Strong understanding web architecture and the web development process. 
          </div> 
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="skill-item">
          <div className="skill-img" style={{backgroundImage: `url(${window.location.origin}/images/skills/3.png)`}}></div>
          <div className="skill-desc">
            A good eye for design and an instictive feel for creating a pleasant user experience.
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="skill-item">
          <div className="skill-img" style={{backgroundImage: `url(${window.location.origin}/images/skills/4.png)`}}></div>
          <div className="skill-desc">
            Always learning, and looking for new technologies that could push my work to the next level.
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="skill-item">
          <div className="skill-img" style={{backgroundImage: `url(${window.location.origin}/images/skills/2.png)`}}></div>
          <div className="skill-desc">
            Solid foundational knowledge of programming principles.  Able to solve problems efficiently and elegantly.
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Skills;