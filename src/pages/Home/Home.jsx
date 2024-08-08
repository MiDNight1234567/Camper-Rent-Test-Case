import { Link } from 'react-router-dom';
import css from './Home.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const Home = () => {
  return (
    <>
      <DocumentTitle>CampersRent</DocumentTitle>
      <section className={css.containerHero}>
        <h1 className={css.title}>Welcome to CamperRent</h1>
        <h2 className={css.subtitle}>
          Book a camper today and start your adventure!
        </h2>
        <button type="button" className={css.bookLink}>
          <Link to="/catalog">Book</Link>
        </button>
      </section>
    </>
  );
};

export default Home;
