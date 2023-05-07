import PropTypes from 'prop-types';
import { Portal } from 'components/Portal/Portal';
import { StyledModal } from './Modal.styled';
import { GrFormClose } from 'react-icons/gr';

export const Modal = ({ children, toggle, open }) => {
  return (
    <Portal>
      {open && (
        <StyledModal.ModalWrapper onClick={toggle}>
          <StyledModal.ModalBody onClick={event => event.stopPropagation()}>
            <StyledModal.CloseButton onClick={toggle}>
              <GrFormClose />
            </StyledModal.CloseButton>
            {children}
          </StyledModal.ModalBody>
        </StyledModal.ModalWrapper>
      )}
    </Portal>
  );
};

Modal.propTypes = {
  toggle: PropTypes.func,
  open: PropTypes.bool,
};
