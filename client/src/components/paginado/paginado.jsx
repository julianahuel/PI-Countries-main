import React from "react"
import style from './paginado.module.css'

export default function Paginado ({charactersPerPage, allCountries, paginado}){

    const pageNumber = []

    for (let i = 1; i < Math.ceil(allCountries/charactersPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div>
            <ul className={style.pagination}>
                {pageNumber &&
                    pageNumber.map(num=>{
                        return <li key={num} style={{ listStyle:'none' }}>
                            <button  className={style.buttons} onClick={()=> paginado(num)}>{num}</button>
                        </li>
                    })

                }
            </ul>
        </div>
    )
    
}