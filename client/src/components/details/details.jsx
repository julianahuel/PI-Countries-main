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
        <div className={style.todo}>
        <Link to='/countries'><button className={style.buttonBack}>Back</button> </Link>
            <div className={style.container}>
                <div className={style.containerHeader }>
                    <h1 className={style.name}>{details?.name} - {details?.id} </h1>
                    <img alt='country' height={400} src={details?.image} />
                </div>
                <div className={style.infoContainer}>
                    <p className={style.information}>Information</p>
                    <h3 className={style.capital}>
                        Capital: {details?.capital}
                    </h3>
                    <h3 className={style.extras}>Continent: {details?.continent}</h3>
                    <h3 className={style.extras}>Region: {details?.region}</h3>
                    <h3 className={style.extras}>
                        Population: {new Intl.NumberFormat("en-EN").format(details?.population)}
                    </h3>
                    <h3 className={style.extras}>
                        Area: {new Intl.NumberFormat("en-EN").format(details?.area)} km2
                    </h3>
                    <h2 className={style.activities}>
                        <span className={style.titleAct}>Activities</span><br/>
                        {details?.activities?.length > 0 
                        ?details?.activities.map(ac => {
                            return <div key={ac.id} className={style.details}>
                                <span>Name: {ac.name} </span>
                                <br/> 
                                <span>Duration: {ac.duration} </span>
                                <br/> 
                                <span>Season: {ac.season} </span>
                                <br/> 
                                <span>Difficulty: {ac.difficulty}/5 </span>
                            </div>
                        })
                        : <span>There isn't activity</span>
                        }
                    </h2>
                </div>
            </div>
        </div>

    )
}