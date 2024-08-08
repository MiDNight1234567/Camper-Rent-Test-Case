// import { useEffect } from 'react';
import Modal from 'react-modal';
import css from './UniversalModal.module.css';

Modal.setAppElement('#root');

const UniversalModal = ({
  isOpen,
  onRequestClose,
  children,
  shouldCloseOnOverlayClick = true,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      style={{
        overlay: {
          backgroundColor: 'rgba(47, 47, 47, 0.6)',
          zIndex: '15',
          overflow: 'auto',
          display: 'grid',
          placeItems: 'center',
        },
      }}
      className={{
        base: css.modalContent,
        afterOpen: css.modalContentOpen,
        beforeClose: css.beforeClose,
      }}
    >
      <button onClick={onRequestClose} className={css.closeButton}>
        Close btn
      </button>
      {children}
    </Modal>
  );
};

export default UniversalModal;
