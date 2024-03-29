import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: relative;
`

const Spin = keyframes`
  0% {opacity: 0.1}
  50% {opacity: 1}
  100% {opacity: 0.1}
`

const Pulse = keyframes`
  0% {transform: scale(0)}
  50% {transform: scale(1)}
  100% {transform: scale(0)}
`

const Dot = styled.div`
  position: absolute;
  top: ${props => (Math.sin((props.number/props.numCircles)*2*3.14) + 1) * (props.size/2)}px;
  right: ${props => (Math.cos((props.number/props.numCircles)*2*3.14) + 1) * (props.size/2)}px;
  margin: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
  animation: ${Spin} 1.5s linear ${props => (props.number/props.numCircles)*1.5}s infinite backwards, ${Pulse} 1.5s linear ${props => (props.number/props.numCircles)*1.5}s infinite backwards;
`

const Loading = (props) => {

  const getColor = () => {
    return "rgb(" + (256/2) * (1+Math.random()) + ',' +
    (256) *(Math.random()) + ',' + 
    (256) * (Math.random()) + ')';
  } 

  return (
    <div style={{height: "100%"}}>
      <Loader size={props.size}>
        {[...Array(props.numCircles).keys()].map(item => 
          <Dot key={item} size={props.size} numCircles={props.numCircles} number={item} color={getColor()}></Dot>
        )}
      </Loader>
    </div>
  )
}

export default Loading;