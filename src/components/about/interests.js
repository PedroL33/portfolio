import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../styles/aboutInterests.module.css';

function Interests() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
        <div className={styles.slide}>
          <div className={styles.image} style={{backgroundImage: `url(${window.location.origin}/images/interests/cooking.jpeg)`}}></div>
          <div className={styles.body}>
            <div className={styles.title}>Cooking</div>
            <div className={styles.desc}>I picked up some knife skills while working in a restaurant in Seattle. Today I use them to make my own food.</div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.slide}>
          <div className={styles.image} style={{backgroundImage: `url(${window.location.origin}/images/interests/golf.jpeg)`}}></div>
          <div className={styles.body}>
            <div className={styles.title}>Golfing</div>
            <div className={styles.desc}>I have recently started playing golf.  Although I am terrible, it is a good way to spend a day with my dad.</div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.slide}>
          <div className={styles.image} style={{backgroundImage: `url(${window.location.origin}/images/interests/seahawks.jpg)`}}></div>
          <div className={styles.body}>
            <div className={styles.title}>Seahawks</div>
            <div className={styles.desc}>I am a diehard Seattle Seahawks fan.  I will not be available on Sundays from October through February.</div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Interests;