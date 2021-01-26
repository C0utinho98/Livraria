import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';

export const Container = styled.div`
  color: #6d6466;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

export const Card = styled.div`
  width: 230px;
  height: 300px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: black;
  }

  img {
    width: 100%;
    height: 90%;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  background: #d8e1e9;
  position: relative;
  top: -13px;
  height: 40px;
  border-radius: 10px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Carousel = styled(AliceCarousel)``;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.div`
  cursor: pointer;
`;
