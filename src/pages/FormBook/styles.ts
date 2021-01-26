import styled from 'styled-components';

export const Form = styled.form`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100%;

  button {
    margin-top: 20px;
  }

  svg {
    cursor: pointer;
  }

  > svg {
    &:hover {
      color: #ff9000;
    }
  }
`;
export const WrapperUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  label {
    cursor: pointer;
    width: 48px;
    height: 48px;
    background-color: #ff9000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    top: -35px;
    left: 120px;
    input {
      display: none;
    }
  }
`;
export const Inputs = styled.div``;
