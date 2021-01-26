/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { Header, Container } from '../components';

interface Props extends RouteProps {
  component: React.ComponentType;
  isPrivate: boolean;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const signed = useSelector<IState>(state => state.auth.signed);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/main" />;
  }

  return (
    <Route
      {...rest}
      render={() =>
        signed ? (
          <Header>
            <Container>
              <Component />
            </Container>
          </Header>
        ) : (
          <Component />
        )
      }
    />
  );
};

export default RouteWrapper;
