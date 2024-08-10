import css from './AdvantagesList.module.css';
import Iconsvg from '../Icon/Icon';
import generateCamperAdvantages from '../../utils/camperAdvantages';

const AdvantagesList = ({ camper }) => {
  const camperAdvantages = generateCamperAdvantages(camper);

  return (
    <ul className={css.advantagesList}>
      {camperAdvantages.map(
        ({ label, value, iconName }, index) =>
          value !== 0 &&
          value !== '' && (
            <li className={css.advantagesItem} key={index}>
              <Iconsvg className={css.iconAdvantages} iconName={iconName} />
              {value} {label}
            </li>
          )
      )}
    </ul>
  );
};

export default AdvantagesList;
