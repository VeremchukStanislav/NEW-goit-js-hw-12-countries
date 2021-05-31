import refs from './js/refs';
import API from './js/fetchCountry';
import countryCardHbs from './templates/country-markup.hbs';
import countryListHbs from './templates/countries-list.hbs';
import { warningMessage, errorMessage, moreSymbolsMessage, yeahMessage } from './js/input';


const _ = require('lodash.debounce');

refs.searchInput.addEventListener('input', _(onSearch, 500));

function onSearch(e) {
    e.preventDefault();
    const searchName = e.target.value;
    const searchNameValid = searchName.trim()
    if (searchNameValid) {
        API.fetchCountries(searchName).then(dataProcessing)
            .catch(error => {
                removeMarkup();
                errorMessage();
            });
    };
};

function dataProcessing(country) {
    removeMarkup()
    if (country.length > 10) {
        warningMessage();
    } else if (country.length >= 2 && country.length <=10) {
        renderCountryList(country);
        moreSymbolsMessage();
    } else {
        renderCountryCard(country);
        yeahMessage();
    };
};

function renderCountryList(country) {
    const countryListMarkup = countryListHbs(country);
    refs.card.insertAdjacentHTML('beforeend', countryListMarkup);
};

function renderCountryCard(country) {
    const countryCardMarkup = countryCardHbs(country[0]);
    refs.card.insertAdjacentHTML('beforeend', countryCardMarkup);
};

function removeMarkup() {
    refs.card.innerHTML = '';
};