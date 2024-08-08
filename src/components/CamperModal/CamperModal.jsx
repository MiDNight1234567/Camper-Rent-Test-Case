import { useModalContext } from '../../context/useModalContext';
import css from './CamperModal.module.css';

const CamperModal = () => {
  const { closeModal } = useModalContext();
  // const dispatch = useDispatch();

  // closeModal();

  return (
    <div className={css.deleteModalBackground}>
      <h2 className={css.title}>CamperModal</h2>
      <div className={css.buttons}>
        <button className={css.buttoncancel} onClick={closeModal} type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CamperModal;
