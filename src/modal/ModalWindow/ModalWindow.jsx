import Modal from 'react-modal';
import css from './ModalWindow.module.css';
import Iconsvg from '../../components/Icon/Icon';
import { useModalContext } from '../../context/useModalContext';

Modal.setAppElement('#root');

const ModalWindow = ({ modalName }) => {
  const { isOpen, closeModal, modalContent } = useModalContext();

  return (
    <Modal
      isOpen={isOpen[modalName]}
      onRequestClose={() => closeModal(modalName)}
      className={css.modalContent}
      overlayClassName={css.modalBackdrop}
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <button
        type="button"
        className={css.modalCloseButton}
        onClick={() => closeModal(modalName)}
      >
        <Iconsvg iconName="close" className={css.iconClose} />
      </button>
      <>{modalContent[modalName]}</>
    </Modal>
  );
};
export default ModalWindow;
