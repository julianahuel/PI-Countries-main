import React from "react"
import { useSelector } from "react-redux"
import World from "../components/home/home"

export default function Home(){
    // const dispatch = useDispatch()
    let allPokes = useSelector(state=> state.allCountries)

    return <div>
        {allPokes
            ?<World/>
            :'cargando'
        }
    </div>
}