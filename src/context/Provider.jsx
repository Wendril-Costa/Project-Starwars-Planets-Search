import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [search, setSearch] = useState('');
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(endpoint).then((reponse) => reponse.json());
      setPlanetsList(results);
    };
    getPlanets();
  }, []);

  return (
    <MyContext.Provider value={ { planetsList, search, setSearch } }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
