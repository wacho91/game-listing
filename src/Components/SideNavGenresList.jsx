import React, {useState} from "react";
import genres from '../Data/Genres';

const SideNavGenresList = ({ selectedGameId }) => {

    const [ activeIndex, setActiveIndex ] = useState(0);

  return (
    <div>
        <h3>Genres</h3>
        {genres.map((item,index) => (
            <div key={index}>
                <img src={item.image_background} alt="" />
                <h3>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default SideNavGenresList
