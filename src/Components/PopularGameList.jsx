import GlobalApi from "../Services/GlobalApi"


const PopularGameList = ({gameList}) => {

    const getMovieDetails = (id) => {
        GlobalApi.getMovieDetails(id).then(res => {
            console.log(res)
        });
    }

  return (
    <div>
        <h2>Popular Games</h2>
        <div>
            {gameList.map((item) => (
                <div key={item.id}>
                    <img src={item.background_image} alt="" />
                    <div>
                        <h2>{item.name}<span>{item.metacritic}</span></h2>
                        <h2>⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PopularGameList
