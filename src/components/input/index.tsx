import React, { useState, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  inputRef?: any;
  error?: boolean;
  msgError?: string;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  inputRef,
  error,
  msgError,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused} isError={error} data-testid="input-test">
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
        ref={inputRef}
      />
      {error && (
        <Error title={msgError}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
