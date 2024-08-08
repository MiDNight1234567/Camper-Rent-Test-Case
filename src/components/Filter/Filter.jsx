import Iconsvg from '../Icon/Icon';
import css from './Filter.module.css';

const Filter = () => {
  return (
    <form className={css.filterForm}>
      <div className={css.location}>
        <label htmlFor="location" className={css.label}>
          Location
        </label>
        <div className={css.inputWrapper}>
          <Iconsvg iconName="mapPin" className={css.iconMap} />
          <input
            type="text"
            id="location"
            className={css.locationInput}
            placeholder="City"
          />
        </div>
      </div>

      <div className={css.filterSection}>
        <label htmlFor="vehicle" className={css.label}>
          Filters
        </label>
        <div className={css.filterEquipment}>
          <h3 className={css.filterTitle}>Vehicle equipment</h3>
          <ul className={css.filterList}>
            <li className={css.filterItem}>
              <Iconsvg iconName="airContainer" className={css.iconFilter} />
              <span>AC</span>
            </li>
            <li className={css.filterItem}>
              <Iconsvg iconName="automatic" className={css.iconFilterStr} />
              <span>Automatic</span>
            </li>
            <li className={css.filterItem}>
              <Iconsvg iconName="kitchen" className={css.iconFilterStr} />
              <span>Kitchen</span>
            </li>
            <li className={css.filterItem}>
              <Iconsvg iconName="TV" className={css.iconFilterStr} />
              <span>TV</span>
            </li>
            <li className={css.filterItem}>
              <Iconsvg iconName="shower" className={css.iconFilterStr} />
              <span>Shower/WC</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.filterSection}>
        <h3 className={css.filterTitle}>Vehicle type</h3>
        <ul className={css.filterList}>
          <li className={css.filterItem}>
            <Iconsvg iconName="camperMedium" className={css.iconFilterStr} />
            <span>Van</span>
          </li>
          <li className={css.filterItem}>
            <Iconsvg iconName="camperSmall" className={css.iconFilterStr} />
            <span>Fully Integrated</span>
          </li>
          <li className={css.filterItem}>
            <Iconsvg iconName="camperBig" className={css.iconFilterStr} />
            <span>Alcove</span>
          </li>
        </ul>
      </div>

      <button className={css.searchButton}>Search</button>
    </form>
  );
};

export default Filter;
