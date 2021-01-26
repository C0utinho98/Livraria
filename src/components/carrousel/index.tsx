import React, { useState, useCallback } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './alice-carousel.css';
import { useDispatch } from 'react-redux';
import Modal from '../modal';
import Description from '../description';
import { Card, Container, Content, Carousel, Wrapper, Icon } from './styles';
import { getBooks, clearState } from '../../store/reducers/book/actions';

interface Book {
  id: string;
  name: string;
  description: string;
  author: string;
  year: string;
  numberPages: number;
  cover: string;
  reserved: boolean;
}

interface CarrouselProps {
  books: Book[];
}

const Carrousel: React.FC<CarrouselProps> = ({ books }) => {
  const dispatch = useDispatch();
  const [itemSelected, setItemSelect] = useState<Book>();
  const [openModal, setOpenModal] = useState(false);

  const handleClose = useCallback(
    close => {
      dispatch(getBooks());
      dispatch(clearState());
      setOpenModal(close);
    },
    [dispatch],
  );

  const items = books.map((el, index) => (
    <Card
      onClick={() => {
        setItemSelect(el);
        setOpenModal(true);
      }}
    >
      <Wrapper>
        <img src={el.cover} alt={el.name} />
        <Content>
          <span>{el.name}</span>
        </Content>
      </Wrapper>
    </Card>
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <Container>
      <Carousel
        paddingLeft={50}
        items={items}
        responsive={responsive}
        infinite
        animationType="fadeout"
        animationDuration={800}
        renderPrevButton={() => (
          <Icon>
            {books.length > 1 && <IoIosArrowBack size={40} color="#ffff" />}
          </Icon>
        )}
        renderNextButton={() => (
          <Icon>
            {books.length > 1 && <IoIosArrowForward size={40} color="#ffff" />}
          </Icon>
        )}
        disableDotsControls
      />
      <Modal show={openModal} close={close => handleClose(close)}>
        <Description book={itemSelected as Book} />
      </Modal>
    </Container>
  );
};

export default Carrousel;
