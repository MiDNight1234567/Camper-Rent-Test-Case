import { useDispatch, useSelector } from 'react-redux';
import css from './Catalog.module.css';

import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import Filter from '../../components/Filter/Filter';
import CamperList from '../../components/CamperList/CamperList';
import { selectFilteredCampers } from '../../redux/camper/selectors';
import { useEffect } from 'react';
import { getCampers } from '../../redux/camper/operations';
import { selectError, selectIsLoading } from '../../redux/camper/selectors';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectFilteredCampers);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <section className={css.container}>
        <Filter />
        {adverts.length === 0 ? (
          <p className={css.noCampersFiltered}>
            There is no campers matches your search
          </p>
        ) : (
          <CamperList adverts={adverts} />
        )}
      </section>
    </>
  );
};

export default Catalog;
