import React from 'react';
import { Container } from './styles';

interface tooltipProps {
  title?: string;
  className?: string;
}

const Tooltip: React.FC<tooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
