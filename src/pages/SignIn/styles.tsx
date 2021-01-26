import styled from 'styled-components';

export const Container = styled.form`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100%;

  button {
    margin-top: 20px;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-bottom: 30px;

  span {
    color: #ff9000;
  }

  svg {
    &:hover {
      color: #ff9000;
    }
  }
`;
