
import { useState,useEffect, useContext } from 'react';
import Logo from '../assets/Images/logo.png';
import Logo1 from '../assets/Images/logo1.png';

import SideNavGenresList from './SideNavGenresList';
import { HiMoon, HiOutlineBars3CenterLeft, HiOutlineMagnifyingGlass, HiOutlineXMark, HiSun } from 'react-icons/hi2';
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {

  const [ toggle, setToggle ] = useState(false);
  const {theme,setTheme}=useContext(ThemeContext)

  useEffect(()=>{
    console.log('THEME--',theme)
  },[])

  return (
    <div className="flex items-center p-3">
        <img src={ Logo } width={60} height={60} className="hidden md:block" />
        <div className="md:hidden">
          {!toggle ? <HiOutlineBars3CenterLeft  onClick={() => setToggle(!toggle)} 
            className="dark:text-white text-[25px] cursor-pointer"/>
          :<HiOutlineXMark onClick={() => setToggle(!toggle)} className="dark:text-white text-[25px] cursor-pointer" />}

          {toggle ? 
            <div className="absolute z-10 bg-white  mt-3 dark:bg-[#121212]">
                <SideNavGenresList />
            </div>: null
          }
        </div>
        <div className="flex bg-slate-200 mx-5 w-full p-2 rounded-full items-center px-2">
          <HiOutlineMagnifyingGlass />
          <input type="text" placeholder='Search Games' 
          className="bg-transparent w-full outline-none pl-2 items-center rounded-full"/>
        </div>
        <div>
            {
              theme === "dark" ? <HiSun onClick={()=>setTheme('light')} className="text-[35px] cursor-pointer
              bg-gray-200 text-black p-1 rounded-full" />
              : <HiMoon className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full" onClick={()=>setTheme('dark')} />
            }
        </div>
    </div>
  )
}

export default Header