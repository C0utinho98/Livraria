import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Modal } from '../../components';

describe('Modal component test', () => {
  it('Render component', () => {
    render(
      <Modal show close={close => close}>
        <h1>test</h1>
      </Modal>,
    );
  });
  it('close modal', () => {
    let close = false;
    const { getByTestId } = render(
      <Modal
        show
        close={bool => {
          close = bool;
        }}
      >
        <h1>test</h1>
      </Modal>,
    );

    const buttonClose = getByTestId('close-modal');
    fireEvent.click(buttonClose);
    expect(close).toEqual(false);
  });
});
