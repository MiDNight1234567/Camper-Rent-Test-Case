import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const NotFoundPage = () => {
  return (
    <>
      <DocumentTitle>Not found</DocumentTitle>
      <section className={css.container}>
        <p className={css.errorText}>
          &#x261D;Sorry, the page you visited does not exist!
        </p>
        <button type="button" className={css.backHome}>
          <Link to="/">Back home</Link>
        </button>
      </section>
    </>
  );
};

export default NotFoundPage;
