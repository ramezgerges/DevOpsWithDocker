/* eslint react/prop-types: 0 */

import React, {useState} from "react";

const FilteredCountries = ({ countries, nameFilter, setNameFilter }) => {
  countries = countries.filter(country => country.name.toLowerCase().includes(nameFilter.toLowerCase()));
  const [ weather ] = useState({});

  console.log("rerender");

  if (countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    );
  } else if (countries.length === 1) {
    const country = countries[0];
    if ("temp" in weather) {
      return (
        <div>
          <h2>{country.name}</h2>
          capital {country.capital}
          <br/>
          population {country.population}

          <h3>languages</h3>
          <ul>
            {country.languages.map(language => <li key={country.name + language.name}>{language.name}</li>)}
          </ul>

          <img src={country.flag} alt={`{country.name}'s flag`} width="130" height="130"/>

          <h3><b>Weather in {country.capital}</b></h3>
          <h4>{weather.description}</h4>
          <b>temperature:</b> {weather.temp} Celsius
          <br/>
          <b>wind:</b> {weather.windSpeed} km/h direction {weather.windDirection}
        </div>
      );
    } else {
      return (
        <div>
          <h2>{country.name}</h2>
          capital {country.capital}
          <br/>
          population {country.population}

          <h3>languages</h3>
          <ul>
            {country.languages.map(language => <li key={country.name + language.name}>{language.name}</li>)}
          </ul>

          <img src={country.flag} alt={`{country.name}'s flag`} width="130" height="130"/>
        </div>
      );
    }
  } else if (countries.length === 0) {
    return (
      <div>
        no country matches the filter provided
      </div>
    );
  } else { //between 2 and 10
    return (
      <div>
        {countries.map(country => {
          return (
            <p key={country.name}>
              {country.name} <button onClick={() => setNameFilter(country.name)}>show</button>
            </p>
          );
        })}
      </div>
    );
  }
};

export default FilteredCountries;
