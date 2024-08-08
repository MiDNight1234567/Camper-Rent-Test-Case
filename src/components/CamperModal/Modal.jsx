import { useModalContext } from '../../context/useModalContext';
import UniversalModal from '../../shared/UniversalModal/UniversalModal';

const Modals = () => {
  const { isOpen, closeModal, modalContent } = useModalContext();

  return (
    <UniversalModal isOpen={isOpen} onRequestClose={closeModal}>
      {modalContent}
    </UniversalModal>
  );
};

export default Modals;
