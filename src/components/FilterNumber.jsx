import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function FilterNumber() {
  const {
    filterNumber,
    setFilterNumber,
    columnOption,
    setColumnOption,
  } = useContext(MyContext);
  const [valueInput, setValueInput] = useState(
    { column: 'population', comparison: 'maior que', number: '0' },
  );

  const { column, comparison, number } = valueInput;

  const handleChange = ({ target: { name, value } }) => {
    setValueInput((element) => ({ ...element, [name]: value }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    setFilterNumber([...filterNumber, valueInput]);
    setColumnOption((prev) => {
      prev.splice(columnOption.indexOf(valueInput.column), 1);
      return prev;
    });
  };

  return (
    <form>
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          name="column"
          value={ column }
          onChange={ handleChange }
        >
          {columnOption
            .map((element) => (
              <option
                value={ element }
                key={ element }
              >
                {element}
              </option>))}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          data-testid="comparison-filter"
          name="comparison"
          value={ comparison }
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="number">
        <input
          id="number"
          type="number"
          name="number"
          value={ number }
          onChange={ handleChange }
          data-testid="value-filter"
        />
      </label>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterNumber;
