import React from "react";
import { Link } from "react-router-dom";
import landing from '../../imgs/landing.jpg'
import style from './landing.module.css'

export default function Landing(){
    return (
        <div >
            <div className={style.container}>
                <img className={style.image} alt='landing' src={landing}/>
            </div>
            <div className={style.containerButton}>
                <Link to='/countries'><button className={style.button}>Let's ConGO!</button></Link>
            </div>
        </div>
    )
}