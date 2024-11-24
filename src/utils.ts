import { css, keyframes } from '@emotion/react';

export const getAnimatedStyle = (num: number, count?: number) => {
  const flipAnimation = keyframes`
  0% {
    -webkit-transform: rotateX(0deg); 
  }
  10% {
    -webkit-transform: rotateX(45deg); 
  }
  20% {
    -webkit-transform: rotateX(90deg);
  }
  30% {
    -webkit-transform: rotateX(135deg);
  }
  40% {
    -webkit-transform: rotateX(180deg);
  }
  50% {
    -webkit-transform: rotateX(180); 
  }
  60% {
    -webkit-transform: rotateX(270deg);
  }
  70% {
    -webkit-transform: rotateX(315deg);
  }
  
  100% {
     -webkit-transform: rotateX(0deg); 
  }
  `;

  return () => css`
    padding: 2px 2px;
    border: 1px solid silver;
    margin-right: 2px;
    border-radius: 5px;
    min-width: 19px;
    height: 7vh;
    min-height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: -webkit-linear-gradient(
      -90deg,
      #00395b,
      #206d9d,
      #00224b,
      #0c0d0e
    );
    animation: ${flipAnimation} 0.010s linear ${num}ms;
    animation-iteration-count: ${count ?? num};
  `;
};
