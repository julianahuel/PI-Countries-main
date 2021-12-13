import React from 'react';
import {useState, useEffect} from 'react'
import {useDispatch,  useSelector} from 'react-redux'
import {getCountries} from '../../actions'
import {
    filterByContinent,
    filterByActivity,
    sort,
  } from '../../actions'
import { Country } from '../country/country';
import NavBar from '../navBar/navBar';
import Paginado from '../paginado/paginado';
import style from './home.module.css'

export default function World (){

    const dispatch = useDispatch();
    const allCountries = useSelector(state=> state.country)
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage, setCharactersPerPage] = useState(9)
    const lastCharacter = currentPage * charactersPerPage
    const firstCharacter = lastCharacter - charactersPerPage
    const currentCharacter = allCountries.slice(firstCharacter, lastCharacter)

    const [order, setOrder] = useState('')

    const paginado = (num)=>{
        setCurrentPage(num)
    }
    const onClickChange = (e)=>{
        e.preventDefault()
        dispatch(getCountries())
    }

    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

      //filtro por continente
  function handleContinentFilter(e) {
    dispatch(filterByContinent(e.target.value))
  }

  //filtro por actividad
  function handleActivityFilter(e) {
    dispatch(filterByActivity(e.target.value))
  }


  //ordenar por nombre o poblacion
  function handleSort(e) {
    e.preventDefault()
    dispatch(sort(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
  }

 
    // const {name, id, flag, continent} = allCountries
    
    return (
        <div className={style.home}>
            <h1 className={style.title}>Countries App</h1>
                <NavBar
                    sort={handleSort}
                    contFilter={handleContinentFilter}
                    actFilter={handleActivityFilter}
                />
            <div className={style.reload} >
                <img alt='reload' src='https://cdn0.iconfinder.com/data/icons/glyphpack/41/refresh-512.png' height={40}  onClick={(e)=>onClickChange(e)}/>
            </div>

            <div className={style.cards}>
                {Array.isArray(currentCharacter)
                    ?currentCharacter?.map( country =>{
                        return <Country name = {country.name} flag={country.image} continent={country.continent} population={country.population} id={country.id} key={country.id} />
                    })
                    : <h1>
                        {'Not countries found. Try again later'}
                    </h1>
                }
            </div>
            <div>
                <Paginado
                charactersPerPage={charactersPerPage}
                allCountries={allCountries.length}
                paginado={paginado}
                />
            </div>
        </div>

    )
}
