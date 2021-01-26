import React from 'react';
import { useDispatch } from 'react-redux';
import { GiBookmark } from 'react-icons/gi';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../components';
import { handleLogin } from '../../store/reducers/auth/actions';
import { Container, WrapperLogo } from './styles';

interface DataInterface {
  name: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = handleSubmit((data: DataInterface): void => {
    dispatch(handleLogin({ ...data, signed: true }));
  });

  return (
    <Container autoComplete="off" onSubmit={onSubmit}>
      <WrapperLogo>
        <GiBookmark size={150} />
        <span>Book store</span>
      </WrapperLogo>
      <Input
        name="name"
        placeholder="Digite seu nome"
        icon={IoPersonCircleSharp}
        inputRef={register({ required: true })}
        msgError="Insira seu nome"
        error={errors.name}
      />
      <Input
        name="password"
        placeholder="Digite sua senha"
        type="password"
        icon={RiLockPasswordFill}
        inputRef={register({ required: true })}
        msgError="Insira sua senha"
        error={errors.password}
      />
      <Button type="submit">Acessar</Button>
    </Container>
  );
};

export default SignIn;
