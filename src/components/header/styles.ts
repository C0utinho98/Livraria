import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #d8e1e9;
  padding: 0 30px;
  color: #254e70;
  height: 100px;

  svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 50px;
  }

  svg {
    &:hover {
      color: #ff9000;
    }
  }
`;

export const LeftContent = styled.div`
  display: flex;
  height: 100%;
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperUser = styled.div`
  display: flex;
  margin-left: 40px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
