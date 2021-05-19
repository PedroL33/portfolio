import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/project.module.css';
import UploadImage from '../admin/uploadImage';
import { setCurrentProject } from '../../actions';

function Project(props) {

  const dispatch = useDispatch();
  const [width, setWidth] = useState(null);
  const [img, setImg] = useState("");

  useEffect(() => {
    if(!width) {
      setWidth(getWidth());
    }
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setCurrentProject(props.project));
    props.setShow(true);
  }

  const getWidth = () => {
    return (Math.random()*200) + 300;
  }

  return ( 
    <div className={styles.container} style={{width: `${width}px`}}>
      <div className={styles.multiBtn}>
        <a className={styles.overlay__btn} href={props.project.gitLink} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        <a className={styles.overlay__btn} href={props.project.liveLink} target="_blank" rel="noopener noreferrer"><i class="fas fa-eye"></i></a>
        <button className={styles.overlay__btn} onClick={(e)=>handleClick(e)}><i class="fas fa-info-circle"></i></button>
      </div>
      <div className={styles.overlay} style={{backgroundImage: `url(${img.length ? img: props.project.thumbImg ? props.project.thumbImg: `${window.location.origin}/images/noImage.jpg`})`}}>
        <UploadImage img={img} setImg={setImg} type="thumbnail" id={props.project._id}/>
        <div className={styles.title}>
          {props.project.title}
        </div>
      </div>
    </div>
  )
}

export default Project;