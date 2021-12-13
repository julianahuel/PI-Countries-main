import React, {useState} from 'react'
import { getCountryByName } from '../../actions'
import { useDispatch } from 'react-redux'
import style from './search.module.css'

export default function SearchBar(){
  const [search, setSearch] = useState('')
  let dispatch = useDispatch()
  function onSubmit(e) {
      e.preventDefault();
      dispatch(getCountryByName(search))
      console.log('ENVIADO')
  }
  function onInputChange(e) {
      e.preventDefault()
      setSearch(e.target.value)
      console.log(e.target.value)
  }
  return <div>
      <form className={style.form} onSubmit={onSubmit}>
          <input className={style.input} type="text" placeholder='Buscar pais...' onChange={onInputChange} value={search}/>
          <button className={style.button} type="submit" value="Buscar">Search </button>
      </form>
  </div>
}


