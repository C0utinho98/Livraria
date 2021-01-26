import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

const CustomButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <Button type="button" {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
