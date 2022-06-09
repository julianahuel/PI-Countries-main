import {Link} from 'react-router-dom'
import React from 'react'
import style from './navBar.module.css'
import Loaded from '../../imgs/Loaded.gif'
import SearchBar from '../searchBar/searchBar'
import Buttons from '../buttons/buttonsHome'

export default function NavBar({ sort, contFilter, actFilter }){

    return (
        
        <header className={style.header}>
            <Link to='/countries'>
                <img alt='index' width={70} height={70} src={Loaded} />
            </Link>
            <nav className={style.navBar}>
                <div className={style.filterContainer}>
                    <SearchBar/>
                    <div>
                        {/* filtro por continente */}
                        <select className={style.filter} onChange={(e) => contFilter(e)}>
                            <option value='All'>Filter by region...</option>
                            <option value='Africa'>Africa</option>
                            <option value='Americas'>Americas</option>
                            <option value='Asia'>Asia</option>
                            <option value='Europe'>Europe</option>
                            <option value='Oceania'>Oceania</option>
                        </select>

                        {/* filtro por actividad */}
                        <select className={style.filter} onChange={(e) => actFilter(e)}>
                            <option value='All'>Filter activities by season...</option>
                            <option value='Summer'>Summer</option>
                            <option value='Fall'>Fall</option>
                            <option value='Winter'>Winter</option>
                            <option value='Spring'>Spring</option>
                        </select>

                        {/* orden por nombre o poblacion */}
                        <select className={style.filter} onChange={(e) => sort(e)}>
                            <option value='AZ'>Sort by...</option>
                            <option value='AZ'>Name (A-Z)</option>
                            <option value='ZA'>Name (Z-A)</option>
                            <option value='populationAsc'>Population (asc)</option>
                            <option value='populationDesc'>Population (desc)</option>
                        </select>
                    </div>
                </div>
                <Buttons/>
            </nav>

        </header>
    )
}