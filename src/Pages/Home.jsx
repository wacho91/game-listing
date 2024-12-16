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
    <div className='grid grid-cols-4 p-8'>
       <div className='hidden md:flex'>
           <SideNavGenresList selectedGenreId={(genreId) => getGameList(genreId)}/>
       </div>
       {gameList?.length&&gameListByGenre?.length>0 ?
            <div className='md:col-span-3 col-span-4 px-3'>
                <Slider game={gameListByGenre[0]} />
                <TrendingGameList gameList={gameList} />
                <PopularGameList gameList={gameListByGenre} />
            </div>
        :null}
    </div>
  )
}

export default Home
