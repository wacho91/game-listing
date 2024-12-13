

const TrendingGameList = ({ gameList }) => {
  return (
    <div>
        <h2>Trending Games</h2>
        <div>
            {gameList.map(
                (item, index) => 
                    index < 4 && (
                        <div key={item.id}>
                            <img 
                                src={item.background_image}
                            />
                            <div>
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    )
            )}
        </div>
    </div>
  )
}

export default TrendingGameList
