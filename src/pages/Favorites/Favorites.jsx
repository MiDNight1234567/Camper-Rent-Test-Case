import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import css from './Favorites.module.css';

import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { selectError, selectIsLoading } from '../../redux/camper/selectors';
import { selectFavorites } from '../../redux/favorite/selectors';
import CamperList from '../../components/CamperList/CamperList';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <section className={css.containerFavorite}>
        <h2 className={css.favoriteTitle}>Favorites</h2>
        {favorites.length > 0 && (
          <p className={css.description}>
            Here you can find all your favorite campers that you have saved.
            Explore and enjoy your favorite choices!
          </p>
        )}
        <button type="button" className={css.backToCatalog}>
          <Link to="/catalog">Back to Catalog</Link>
        </button>
        <CamperList adverts={favorites} />
        {favorites.length === 0 && (
          <>
            <p className={css.noFavorites}>
              You have no favorites yet. Browse the catalog to find campers you
              love!
            </p>
            <div className={css.imgFavorite}></div>
          </>
        )}
      </section>
    </>
  );
};

export default Favorites;
