import css from './ErrorMessage.module.css';
import { Link } from 'react-router-dom';

const ErrorMessage = ({ message = '' }) => {
  return (
    <section className={css.errorMessage}>
      <p className={css.errorText}>
        &#x261D;
        {message.length > 0
          ? message
          : 'Whoops, something went wrong! Please try reloading this page!'}
      </p>
      <button type="button" className={css.backHome}>
        <Link to="/">Back home</Link>
      </button>
    </section>
  );
};

export default ErrorMessage;
