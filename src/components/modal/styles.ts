import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 70%;
  background-color: #d8e1e9;
  color: black;
  border-radius: 10px;
  padding: 25px;
  min-height: 545px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row-reverse;
  svg {
    cursor: pointer;
  }
`;
