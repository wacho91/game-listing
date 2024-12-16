import { useEffect, useState } from "react"

import SideNavGenresList from "../Components/SideNavGenresList"
import GlobalApi from "../Services/GlobalApi"
import Slider from "../Components/Slider"
import PopularGameList from "../Components/PopularGameList"
import TrendingGameList from "../Components/TrendingGameList"


const Home = () => {

    const [ gameList, setGameList ] = useState([])
    const [ gameListByGenre, setGameListByGenre ] = useState([])

    useEffect(() => {
        GlobalApi.getPopularGame.then(res => {
            setGameList(res.data.results)
        })
        getGameList(4);
    },[])

    const getGameList = (genreId) => {
        if(genreId != 0) {
            GlobalApi.getGameListByGenreId(genreId).then(res => {
                setGameListByGenre(res.data.results)
            })
        }
    }

  return (
    <div>
       <div>
           <SideNavGenresList selectedGenreId={(genreId) => getGameList(genreId)}/>
       </div>
       {gameList?.length&&gameListByGenre?.length>0 ?
            <div>
                <Slider />
                <TrendingGameList />
                <PopularGameList />
            </div>
        :null}
    </div>
  )
}

export default Home
