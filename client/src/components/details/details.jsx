import React, { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
// import { getCountryDetails } from "../../actions"
import style from './details.module.css'

export function Details(){


    let {id} = useParams()

    const [details, setState] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/countries/${id}`)
            .then((res) => res.json())
            .then((c) => {
                setState(c);
            });
    }, [id]);
    
    // const {image, name, continent, subregion, capital, area, activities, population}= details

    return(
        <div className={style.container}>
            <Link to='/countries'><button className={style.buttonBack}>Back</button> </Link>
            <div >
                <h1 className={style.name}>{details?.name} - {details?.id} </h1>
            </div>
            <div className={style.image}>
                <img alt='country' height={500} src={details?.image} />
            </div>
            <div className={style.infoContainer}>
                <p className={style.information}>Information</p>
                <div className={style.conyreg}>
                    <span>Continent: {details?.continent}</span>
                    <span>Region: {details?.region}</span>
                </div>
                <h3 className={style.conyreg}>
                    <span>
                        Population: {new Intl.NumberFormat("en-EN").format(details?.population)}
                    </span>
                    <span>
                        Area: {new Intl.NumberFormat("en-EN").format(details?.area)} km2
                    </span>
                    <br/>
                    <span className={style.capital}>
                        Capital: {details?.capital}
                    </span>
                </h3>
                <h2 className={style.activities}>
                    <span className={style.capital}>Activities</span><br/>
                    {details?.activities?.length > 0 
                    ?details?.activities.map(ac => {
                        return <div key={ac.id}>
                            <span>Name: {ac.name} </span>
                            <br/> 
                            <span>Duration: {ac.duration} </span>
                            <br/> 
                            <span>Season: {ac.season} </span>
                            <br/> 
                            <span>Difficulty: {ac.difficulty}/5 </span>
                        </div>
                    })
                    : <span>There isnt activities</span>
                    }
                </h2>
            </div>
        </div>
    )
}