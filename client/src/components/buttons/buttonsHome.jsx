import React from 'react'
import { Link } from 'react-router-dom'
import style from './buttons.module.css'

export default function Buttons(){
    return (
        <div>
            <ul className={style.ul}>
                <li className={style.homeLi}><Link className={style.homeLink} to='/countries' >Home</Link></li>
                <li className={style.createLi}><Link className={style.createLink} to='/create'>Add Activity</Link></li>
            </ul>
        </div>
    )
}