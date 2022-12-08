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
      <div class="country"><img src="${svg}" width="50" height="50"><h2>${official}</h2></div>
      <p><b>Capital</b>: ${capital}</p>
      <p><b>Population</b>: ${population}</p>
      <p><b>Languages</b>: ${Object.values(languages)}</p>
    `;
      }

      return `
      <p class="country-item"><img src="${svg}" width="50" height="50"> ${official}</p>
    `;
    })
    .join('');
}
