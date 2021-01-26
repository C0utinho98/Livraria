import React from 'react';
import Modal from '@material-ui/core/Modal';
import { GrClose } from 'react-icons/gr';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Icon } from './styles';

interface propsModal {
  show: boolean;
  close: { (myArgument: boolean): void };
}

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Modals: React.FC<propsModal> = ({ show, children, close }) => {
  const classes = useStyles();
  return (
    <Modal open={show} className={classes.modal}>
      <Container>
        <Icon>
          <GrClose
            size={30}
            onClick={() => close(!show)}
            data-testid="close-modal"
          />
        </Icon>
        {children}
      </Container>
    </Modal>
  );
};

export default Modals;
