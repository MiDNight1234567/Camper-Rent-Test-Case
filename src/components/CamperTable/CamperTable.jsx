import css from './CamperTable.module.css';
import generateTableDescription from '../../utils/tableDescription';

const CamperTable = ({ camper }) => {
  const tableDescription = generateTableDescription(camper);

  return (
    <div className={css.tableContainer}>
      <table className={css.camperTable}>
        <tbody>
          {tableDescription.map(
            ({ label, value }, index) =>
              value !== 0 &&
              value !== '' && (
                <tr className={css.camperTableRow} key={index}>
                  <td className={css.tableLeft}>{label}</td>
                  <td className={css.tableRight}>{value}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CamperTable;
