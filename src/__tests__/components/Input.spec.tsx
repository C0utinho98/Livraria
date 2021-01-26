import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { Input } from '../../components';

describe('Input component', () => {
  it('render input', () => {
    const { getByPlaceholderText } = render(
      <Input name="teste" placeholder="test" />,
    );

    expect(getByPlaceholderText('test')).toBeTruthy();
  });
  it('input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="teste" placeholder="test" />,
    );

    const inputElement = getByPlaceholderText('test');
    const container = getByTestId('input-test');
    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(container).toHaveStyle('border-color:#ff9000');
      expect(container).toHaveStyle('color:#ff9000');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(container).not.toHaveStyle('border-color:#ff9000');
      expect(container).not.toHaveStyle('color:#ff9000');
    });
  });

  it('input when error', () => {
    const { getByTestId } = render(
      <Input name="teste" placeholder="test" error />,
    );
    const container = getByTestId('input-test');

    expect(container).toHaveStyle('border-color: #c53030;');
  });
});
