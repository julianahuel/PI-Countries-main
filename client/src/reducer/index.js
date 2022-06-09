import {GET_COUNTRIES,GET_BY_NAME,GET_DETAILS,FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, SORT} from '../actions'

const initialState = {
    allCountries: [],
    country:[],
    details: {}
}

const reducer = (state = initialState, action)=>{

    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                country: action.payload,
                allCountries: action.payload
            }
            
        case GET_BY_NAME:
            return {
                ...state,
                country: action.payload,
        }
    
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case FILTER_BY_CONTINENT:
            const filterByContinent = action.payload === 'All' ?state.allCountries :state.allCountries.filter(c => action.payload === c.continent)
            return {
                ...state,
                country:filterByContinent
            }

        case FILTER_BY_ACTIVITY:
            const filterByActivity = action.payload === 'All' ?state.allCountries :state.allCountries.filter(c=> c.activities.some(ac => ac.season === action.payload) )
            return {
                ...state,
                country:filterByActivity
            }
        case SORT:
            var sorted
            if (action.payload.length === 2) {
              sorted =
                action.payload === 'AZ'
                  ? state.allCountries.sort((a, b) => {
                      if (a.name > b.name) return 1
                      if (a.name < b.name) return -1
                      return 0
                    })
                  : state.allCountries.sort((a, b) => {
                      if (a.name > b.name) return -1
                      if (a.name < b.name) return 1
                      return 0
                    })
            } else {
              sorted =
                action.payload === 'populationAsc'
                  ? state.allCountries.sort((a, b) => a.population - b.population)
                  : state.allCountries.sort((a, b) => b.population - a.population)
            }
            return {
                ...state,
                country: sorted
            };
        default:
            return state
    }
}

export default reducer