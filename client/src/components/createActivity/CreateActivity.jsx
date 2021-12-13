import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import { createActivity, getCountries } from '../../actions'
import style from './create.module.css'

export default function Form() {
    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector((state) => state.allCountries)
  
    const [details, setDetails] = useState({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: [],
    })
  const copyD= details
    useEffect(() => {
      dispatch(getCountries())
    }, [dispatch])
  
    function handleChange(e) {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
        })
    }
  
    function handleSelect(e) {
      setDetails({
        ...details,
        countries: [...details.countries, e.target.value],
      })
    }
  
    function handleSubmit(e) {
      if(copyD !== details){

          e.preventDefault()
        dispatch(createActivity(details))
        setDetails({
          name: '',
          difficulty: '',
          duration: '',
          season: '',
          countries: [],
        })
        history.push('./countries')
        alert('Activity created!')
      }else alert('you need complete it')
    }
  
    return (
      <div className={style.divform}>
        <div className={''}>
          <form className={style.form} key={countries.id} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={''}>Add Activities to the countries</h1>
            <div className={style.name}>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                className={style.input}
                onChange={(e) => handleChange(e)}
                // required
              />
            </div>
  
            <div className={style.name}>
              <label className={''} htmlFor='duration'>
                Duration:
              </label>
              <input
                type='text'
                id='duration'
                name='duration'
                className={style.input}
                onChange={(e) => handleChange(e)}
              />
            </div>
  
            <div className={style.name}>
              <label className={''} htmlFor='difficulty'>
                Difficulty:
              </label>
              <select
                id='difficulty'
                name='difficulty'
                className={style.input}
                onChange={(e) => handleChange(e)}
              >
                <option value=''>Difficulty...</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
  
            <div className={style.name}>
              <label className={''} htmlFor='season'>
                Season:
              </label>
              <select
                className={style.input}
                id='season'
                name='season'
                onChange={(e) => handleChange(e)}
              >
                <option value=''>Season...</option>
                <option value='Summer'>Summer</option>
                <option value='Fall'>Fall</option>
                <option value='Winter'>Winter</option>
                <option value='Spring'>Spring</option>
              </select>
            </div>
  
            <div className={style.name}>
              <label className={''} htmlFor='season'>
                Country:
              </label>
              <select
                className={style.input}
                name='countries'
                onChange={(e) => handleSelect(e)}
                // required
              >
                <option value=''>Countries...</option>
                {countries.map((c) => (
                  <option value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <br/>
            <span>{details.countries.map((c) => `${c} | `)}</span>
            <div className={style.buttons}>
              <Link to='/countries'>
                <button className={style.button}>Go back</button>
              </Link>
              <button className={style.button} type='submit'>
                Add Activity
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}