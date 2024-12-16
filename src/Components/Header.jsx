
import { useState,useEffect, useContext } from 'react';
import Logo from '../assets/Images/logo.png';
import Logo1 from '../assets/Images/logo1.png';

import SideNavGenresList from './SideNavGenresList';
import { HiMoon, HiOutlineBars3CenterLeft, HiOutlineMagnifyingGlass, HiOutlineXMark, HiSun } from 'react-icons/hi2';
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {

  const [ toggle, setToggle ] = useState(false);
  const {theme,setTheme}=useContext(ThemeContext)

  useEffect(() => {
    console.log("THEME--", theme);
  },[]);

  return (
    <div>
        <img src={ Logo } alt="" />
        <div>
          {!toggle ? <HiOutlineBars3CenterLeft  onClick={() => setToggle(!toggle)} />
          :<HiOutlineXMark onClick={() => setToggle(!toggle)} />}

          {toggle ? 
            <div>
                <SideNavGenresList />
            </div>: null
          }
        </div>
        <div>
          <HiOutlineMagnifyingGlass />
          <input type="text" placeholder='Search Games' />
        </div>
        <div>
            {
              theme === "dark" ? <HiSun onClick={()=>setTheme('light')} />
              : <HiMoon onClick={()=>setTheme('dark')} />
            }
        </div>
    </div>
  )
}

export default Header