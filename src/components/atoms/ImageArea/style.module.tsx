import styled from 'styled-components';
import { IPerfilImage } from '.';

export const ImageStyled = styled.img<IPerfilImage>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;