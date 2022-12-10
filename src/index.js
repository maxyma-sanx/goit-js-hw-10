import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import CounriesApiService from './countries-api-service';
import renderCountries from './render-countries';
import refs from './refs';

const DEBOUNCE_DELAY = 300;
const counriesApiService = new CounriesApiService();

refs.searchInput.addEventListener(
  'input',
  debounce(onSearchInputChange, DEBOUNCE_DELAY)
);

function onSearchInputChange() {
  counriesApiService.searchQuery = refs.searchInput.value.trim();

  clearRender();

  if (!counriesApiService.searchQuery) {
    return Notify.warning('Please enter country');
  }

  counriesApiService.fetchCountries().then(countries => {
    if (!countries) {
      return;
    }

    if (countries.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      return;
    } else if (countries.length > 1) {
      refs.countryList.insertAdjacentHTML(
        'beforeend',
        renderCountries(countries)
      );
    } else {
      refs.countryInfo.insertAdjacentHTML(
        'beforeend',
        renderCountries(countries)
      );
    }
  });
}

function clearRender() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
