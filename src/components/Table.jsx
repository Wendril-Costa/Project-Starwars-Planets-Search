import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import FilterNumber from './FilterNumber';

function Table() {
  const {
    planetsList,
    filterName,
    setFilterName,
    filterNumber,
  } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilterName(value);
  };

  const filterValues = (element, e) => {
    if (e?.comparison === 'maior que') return element[e.column] > +e.number;
    if (e?.comparison === 'menor que') return element[e.column] < +e.number;
    if (e?.comparison === 'igual a') return element[e.column] === e.number;
    return element;
  };

  const filterSearch = () => {
    const filtered = planetsList.filter(({ name }) => name.toLowerCase()
      .includes(filterName.toLowerCase()))
      .filter((element) => filterValues(element, filterNumber[0]))
      .filter((element) => filterValues(element, filterNumber[1]))
      .filter((element) => filterValues(element, filterNumber[2]))
      .filter((element) => filterValues(element, filterNumber[3]));
    return filtered;
  };

  return (
    <div>
      <header>
        <input
          id="search"
          data-testid="name-filter"
          type="text"
          value={ filterName }
          onChange={ handleChange }
        />
      </header>
      <FilterNumber />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filterSearch().map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
