import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../styles/aboutSkills.module.css';

function Skills() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
        <div className={styles.slide}>
          <div className={styles.image} style={{backgroundImage: `url(${window.location.origin}/images/skills/1.png)`}}></div>
          <div className={styles.desc}>
            Strong understanding web architecture and the web development process. 
          </div> 
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.slide}>
          <div className={styles.image} style={{backgroundImage: `url(${window.location.origin}/images/skills/3.png)`}}></div>
          <div className={styles.desc}>
            A good eye for design and an instictive feel for creating a pleasant user experience.
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.slide}>
          <div className={styles.image} style={{backgroundImage: `url(${window.location.origin}/images/skills/4.png)`}}></div>
          <div className={styles.desc}>
            Always learning, and looking for new technologies that could push my work to the next level.
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.slide}>
          <div className={styles.image} style={{backgroundImage: `url(${window.location.origin}/images/skills/2.png)`}}></div>
          <div className={styles.desc}>
            Solid foundational knowledge of programming principles.  Able to solve problems efficiently and elegantly.
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Skills;