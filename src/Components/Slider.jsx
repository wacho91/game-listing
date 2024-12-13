import { useEffect } from "react"

const Slider = ({ game }) => {

    useEffect(() => {
        console.log(game)
    },[])

  return (
    <div>
        <div>
            <h2>{game.name}</h2>
            <button>Get Now</button>
        </div>
        <img src={game.background_image} alt="" />
    </div>
  )
}

export default Slider
