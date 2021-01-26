import React from 'react';
import { GiBookmark } from 'react-icons/gi';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '../../store/reducers/auth/actions';
import {
  Container,
  Content,
  Wrapper,
  LeftContent,
  WrapperLogo,
  WrapperUser,
} from './styles';
import Button from '../button';
import { IState } from '../../store';

const Header: React.FC = ({ children }) => {
  const name = useSelector<IState, string>(state => state.auth.name);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(handleLogin({ name: '', signed: true, password: '' }));
  };

  const history = useHistory();
  return (
    <>
      <Container>
        <Content>
          <LeftContent>
            <WrapperLogo
              onClick={() => history.push('/main')}
              data-testid="button-logo"
            >
              <GiBookmark size={50} />
              <span>Book Store</span>
            </WrapperLogo>
            <WrapperUser>
              <span>Bem vindo,</span>
              <span style={{ color: '#FF9000' }}>{name}</span>
            </WrapperUser>
          </LeftContent>
          <Wrapper>
            <Button
              onClick={() => history.push('/register')}
              data-testid="button-register"
            >
              Cadastrar Livro
            </Button>
            <AiOutlinePoweroff size={50} onClick={handleSignOut} />
          </Wrapper>
        </Content>
      </Container>
      {children}
    </>
  );
};

export default Header;
