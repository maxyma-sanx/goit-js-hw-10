import { Notify } from 'notiflix';

export default class CounriesApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchCountries() {
    const url = `https://restcountries.com/v3.1/name/${this.searchQuery}?fields=name,capital,population,flags,languages`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          return Notify.failure('Oops, there is no country with that name');
        }
        return response.json();
      })
      .then(data => data);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
