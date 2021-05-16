import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/project.module.css';
import UploadImage from '../admin/uploadImage';
import { setCurrentProject } from '../../actions';
import styled from 'styled-components';

const Container = styled.div`
  position: relative; 
  flex: 1 0 auto;
  border-radius: 10px;
  height: 200px;
  width: ${props => props.width}px;
`

function Project(props) {

  const dispatch = useDispatch();
  const thumbImg = useSelector(state => state.thumbImg);

  const handleClick = () => {
    props.setShow(true);
    dispatch(setCurrentProject(props.project));
  }

  const getWidth = () => {
    return (Math.random()*600) + 100;
  }

  return (
    <> 
      <Container width={getWidth()} thumbImg={thumbImg} pThumbImg={props.project.thumbImg}>
        <div className={styles.overlay} style={{backgroundImage: `url("${thumbImg.length ? thumbImg: props.project.thumbImg ? props.project.thumbImg: `${window.location.origin}/images/noImage.jpg`}")`}} onClick={()=>handleClick()}>
          <UploadImage type="thumbnail" id={props.project._id}/>
          <div className={styles.title}>
            {props.project.title}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Project;