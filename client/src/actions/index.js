import axios from 'axios'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_BY_NAME= 'GET_BY_NAME'
export const GET_DETAILS= 'GET_DETAILS'
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'
export const FILTER_BY_ACTIVITY_NAME = 'FILTER_BY_ACTIVITY_NAME'
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY'
export const SORT = 'SORT'

export const getCountries = ()=>{
    return async (dispatch)=> {

        const countries = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        })
    }       
}

export const getCountryByName = (name)=>{
    return async (dispatch)=>{
        const details = await axios.get(`http://localhost:3001/countries?name=${name}`)

        return dispatch({
            type: GET_BY_NAME,
            payload: details.data
        })
    }
}

export const getCountryDetails = (id)=>{
    return async (dispatch)=>{
        const details = await axios.get(`http://localhost:3001/countries/${id}`)

        return dispatch({
            type: GET_DETAILS,
            payload: details.data
        })
    }
}

export const createActivity = (act)=>{
    return async (dispatch)=>{
        const activity = axios.post('http://localhost:3001/activities', act)
        return activity
    }
}

export const filterByContinent = (payload)=>{
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}


export const filterByActivity = (payload)=>{
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
}

export const sort = (payload)=>{
    return {
        type: SORT,
        payload
    }
}