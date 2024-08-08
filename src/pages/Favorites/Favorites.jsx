import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from './Favorites.module.css';
import FavoriteCamper from '../../components/FavoriteCamper/FavoriteCamper';
import { selectCampers } from '../../redux/selectors';
import css from '../Catalog/Catalog.module.css';

const getFavoritesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('favorites')) || [];
};

const Favorites = () => {
  const adverts = useSelector(selectCampers);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteIds = getFavoritesFromLocalStorage();
    const favoriteCampers = adverts.filter(camper =>
      favoriteIds.includes(camper._id)
    );
    setFavorites(favoriteCampers);
  }, [adverts]);

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <div className={css.container}>
        <p>Favorites</p>
        <h2>Favorites</h2>
        <ul className={css.camperList}>
          {favorites.map(camper => (
            <li className={css.camperItem} key={camper._id}>
              <FavoriteCamper camper={camper} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Favorites;
