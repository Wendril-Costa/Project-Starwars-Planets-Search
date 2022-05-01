import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterNumber, setFilterNumber] = useState([]);
  const [columnOption, setColumnOption] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(endpoint).then((reponse) => reponse.json());
      setPlanetsList(results);
    };
    getPlanets();
  }, []);

  const contextValues = {
    planetsList,
    filterName,
    setFilterName,
    filterNumber,
    setFilterNumber,
    columnOption,
    setColumnOption,
  };

  return (
    <MyContext.Provider value={ contextValues }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
