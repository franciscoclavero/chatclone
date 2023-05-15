import React from 'react';

import { ImageStyled } from './style.module'; 

export interface IPerfilImage {
  height?: string,
  width?: string
}

const ImageArea = ( { height, width }:IPerfilImage ) => {
  return (
    <>
      <ImageStyled height={height} width={width} alt="user image" src="/assets/icons/user.png"/>
    </>
  );
};

export default ImageArea;