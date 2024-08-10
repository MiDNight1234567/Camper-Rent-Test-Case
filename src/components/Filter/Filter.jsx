import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import Iconsvg from '../Icon/Icon';
import { selectFilter } from '../../redux/filter/selectors';
import {
  clearFilters,
  setDetails,
  setForm,
  setLocation,
} from '../../redux/filter/slice';
import { selectCampers } from '../../redux/camper/selectors';

const Filter = () => {
  const allAdverts = useSelector(selectCampers);
  const dispatch = useDispatch();
  const { location, form, details } = useSelector(selectFilter);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const uniqueCities = [
      ...new Set(
        allAdverts.map(advert => {
          const [country, city] = advert.location.split(', ');
          return `${city} (${country})`;
        })
      ),
    ];
    setCities(uniqueCities);
    setFilteredCities(uniqueCities);
  }, [allAdverts]);

  const handleCitySelect = (city, setFieldValue) => {
    setFieldValue('location', city);
    setShowDropdown(false);
  };

  const filterCities = inputValue => {
    const filtered = cities.filter(city =>
      city.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const initialValues = {
    location: location,
    form: form,
    details: {
      airConditioner: details.airConditioner,
      automatic: details.automatic,
      kitchen: details.kitchen,
      TV: details.TV,
      shower: details.shower,
    },
  };

  const validationSchema = Yup.object().shape({
    location: Yup.string()
      .min(3, 'Too short city name!')
      .max(58, 'Too long city name!'),
  });

  const handleSearch = (values, { resetForm }) => {
    if (values.location === 'All Cities' || values.location === '') {
      dispatch(setLocation(''));
    } else {
      dispatch(setLocation(values.location));
    }
    dispatch(setForm(values.form));
    dispatch(setDetails(values.details));
    resetForm();
    setShowDropdown(false);
  };

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSearch}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.filterForm}>
          <div className={css.location}>
            <label htmlFor="location" className={css.label}>
              Location
            </label>
            <div className={css.inputWrapper} ref={dropdownRef}>
              <Iconsvg iconName="mapPin" className={css.iconMap} />
              <Field
                type="text"
                name="location"
                className={css.locationInput}
                placeholder="City"
                value={values.location}
                onClick={() => {
                  setShowDropdown(!showDropdown);
                  setFilteredCities(cities);
                }}
                onChange={e => {
                  setFieldValue('location', e.target.value);
                  filterCities(e.target.value);
                  setShowDropdown(true);
                }}
              />
              <ErrorMessage
                className={css.error}
                name="location"
                component="span"
              />
              {showDropdown && (
                <ul className={css.dropdownList}>
                  <li
                    className={css.dropdownItem}
                    onClick={() =>
                      handleCitySelect('All Cities', setFieldValue)
                    }
                  >
                    All Cities
                  </li>
                  {filteredCities.map(city => (
                    <li
                      className={css.dropdownItem}
                      key={city}
                      onClick={() => handleCitySelect(city, setFieldValue)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className={css.filterSection}>
            <label htmlFor="vehicle" className={css.label}>
              Filters
            </label>
            <div className={css.filterEquipment}>
              <h3 className={css.filterTitle}>Vehicle equipment</h3>
              <ul className={css.filterList}>
                {[
                  {
                    name: 'airConditioner',
                    label: 'AC',
                    iconName: 'airContainer',
                  },
                  {
                    name: 'automatic',
                    label: 'Automatic',
                    iconName: 'automatic',
                  },
                  { name: 'kitchen', label: 'Kitchen', iconName: 'kitchen' },
                  { name: 'TV', label: 'TV', iconName: 'TV' },
                  { name: 'shower', label: 'Shower/WC', iconName: 'shower' },
                ].map(item => (
                  <li className={css.filterItem} key={item.name}>
                    <label className={css.filterLabel}>
                      <Field
                        type="checkbox"
                        name={`details.${item.name}`}
                        checked={values.details[item.name]}
                        className={css.checkbox}
                        onChange={({ target: { checked } }) => {
                          setFieldValue(`details.${item.name}`, checked);
                        }}
                      />
                      <div className={css.filterBoxChosed}>
                        <Iconsvg
                          iconName={item.iconName}
                          className={css.iconFilter}
                        />
                        <span>{item.label}</span>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.filterSection}>
            <h3 className={css.filterTitle}>Vehicle type</h3>
            <ul className={css.filterList}>
              {[
                { name: 'panelTruck', label: 'Van', iconName: 'camperSmall' },
                {
                  name: 'fullyIntegrated',
                  label: 'Fully Integrated',
                  iconName: 'camperMedium',
                },
                { name: 'alcove', label: 'Alcove', iconName: 'camperBig' },
              ].map(item => (
                <li className={css.filterItem} key={item.name}>
                  <label className={css.filterLabel}>
                    <Field
                      type="radio"
                      name="form"
                      value={item.name}
                      className={css.radio}
                    />
                    <div className={css.filterBoxChosed}>
                      <Iconsvg
                        iconName={item.iconName}
                        className={css.iconFilterCamper}
                      />
                      <span>{item.label}</span>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <button type="submit" className={css.searchButton}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
