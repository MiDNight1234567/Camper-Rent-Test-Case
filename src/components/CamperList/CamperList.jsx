import { useState } from 'react';
import css from './CamperList.module.css';

import CamperCard from '../CamperCard/CamperCard';

const CamperList = ({ adverts }) => {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleLoadMore = () => {
    setVisibleCards(prevCount => prevCount + 4);
  };

  return (
    <div className={css.campersContainer}>
      <ul className={css.camperList}>
        {adverts.slice(0, visibleCards).map(camper => (
          <li className={css.camperItem} key={camper._id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {visibleCards < adverts.length && (
        <button type="button" className={css.loadMore} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CamperList;
