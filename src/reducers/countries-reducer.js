import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT, ADD_COUNTRY } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
	selectedCountry: {},
	visibleCountries: []
};

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries});
        case GET_COUNTRY:
            const selectedCountry= state.countries.find(country => country.id===parseInt(action.id, 10));
            return Object.assign({}, state, {selectedCountry});
        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries});
        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.id !== action.id);
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id !== action.id);
            return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});
        case SET_CONTINENT:	
            const continentCountries = state.countries.filter(country => country.continent === action.name);
            return Object.assign({}, state, {visibleCountries: continentCountries});	
        case ADD_COUNTRY:
            return Object.assign({}, state, {countries: [...state.countries, {
                "name": action.name,
                "currency" : action.currency,
                "populace": action.populace,
                "capital": action.capital,
                "continent": action.continent,
                "imageUrl": action.imageUrl,
                "id": state.countries.length + 1
            }]});
        default:
            return state;
    }
};

export default countriesReducer;