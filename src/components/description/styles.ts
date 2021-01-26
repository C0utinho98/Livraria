import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 95%;
  padding-top: 15px;

  @media (max-width: 800px) {
    flex-direction: column;
    overflow: auto;
  }
`;

export const LeftContent = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const WrapperButton = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  Button {
    width: 40%;
  }
`;
export const WrapperImg = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 50%;
    width: 70%;
  }

  @media (max-width: 800px) {
    width: 100%;
    img {
      height: 80%;
      width: 30%;
    }
  }
`;

export const RightContent = styled.div`
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
  width: 70%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 21;
    font-weight: 700;
  }

  strong {
    font-size: 20px;
    font-weight: 700;
  }

  span {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  height: 70px;
`;

export const DescriptionText = styled.div`
  margin-bottom: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 13;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Subtitle = styled.div`
  height: 35px;
`;
