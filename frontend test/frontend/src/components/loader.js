// import React from "react";
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid white;
  border-right: 2px solid #d40d1e;
  border-bottom: 2px solid #d40d1e;
  border-left: 2px solid #d40d1e;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
export default Loader;
