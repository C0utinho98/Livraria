import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  background: #ff9000;
  height: 58px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  display: flex;

  ${props =>
    props.color
      ? css`
          background: ${props.color};
          &:hover {
            background-color: ${darken(0.1, props.color)};
          }
        `
      : css`
          &:hover {
            background-color: ${darken(0.1, '#FFA245')};
          }
        `}

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: default;
    `}

  svg {
    position: relative;
    right: 45%;
  }
  transition: background 0.2s;
`;
