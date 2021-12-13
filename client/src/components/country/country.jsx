import React from 'react'
import {Link} from 'react-router-dom'
import style from './country.module.css'

export function Country ({id, name, flag, continent, population}){

    return (
        <div className= {style.card}>
            <Link className={style.subr} to={`/country/${id}`}>
                <div key={id}>
                    <h2 >{name}</h2>
                    <span>
                        <img alt={name} width={300} height={200} src={flag}/>
                    </span>
                    <h3>Continent: {continent}</h3>
                    <h3>Population: {new Intl.NumberFormat("en-EN").format(population) }</h3>
                </div>
            </Link>
        </div>
    )
    
}