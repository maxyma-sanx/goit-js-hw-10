export default function renderCountries(countries) {
  return countries
    .map((country, index, arr) => {
      const {
        name: { official },
        capital,
        population,
        flags: { svg },
        languages,
      } = country;

      if (arr.length === 1) {
        return `
      <p><img src="${svg}" width="50" height="50"> ${official}</p>
      <p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <p>Languages: ${Object.values(languages)}</p>
    `;
      }

      return `
      <p><img src="${svg}" width="50" height="50"> ${official}</p>
    `;
    })
    .join('');
}
