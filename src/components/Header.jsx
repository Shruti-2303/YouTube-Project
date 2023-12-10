import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaCircleUser } from 'react-icons/fa6';
import { BsBell } from 'react-icons/bs';
import { BsCameraVideo } from 'react-icons/bs';
import { HiMicrophone } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_LOGO } from '../constants/imageConstants';
import { YOUTUBE_SEARCH_API } from '../constants/generalConstants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store)=>store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await response.json();
      setSuggestions(json[1]);

      //Update cache
      dispatch(cacheResults({
        [searchQuery] : json[1],
      }))
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleToggleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg pb-2">
      <div className="flex col-span-1">
        <RxHamburgerMenu
          className="w-6 h-6 text-[#030303] mt-4 ml-6 font-thin cursor-pointer"
          onClick={handleToggleSidebar}
        />
        <img
          className="w-24 h-5 mt-5 ml-7 cursor-pointer"
          src={YOUTUBE_LOGO}
          alt="youtube_logo"
        />
      </div>
      <div className="flex mt-2 col-span-10 relative ml-32 ">
        <input
          type="search"
          value={searchQuery}
          className="rounded-l-full border border-gray-300 w-[60%] h-10 p-3 pl-7 outline-none"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="rounded-r-full border border-gray-300 p-2 h-10 pl-7 w-20 text-black text-lg bg-gray-300">
          <IoSearchOutline />
        </button>
        <button className="w-10 h-10 ml-3 bg-gray-200 rounded-full p-2.5">
          <HiMicrophone className="text-xl" />
        </button>
        {showSuggestions && (
          <div className="absolute bg-white top-full left-0 w-[60%] mt-2 px-3 py-2 rounded-lg shadow-lg border border-gray-200">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="flex items-center cursor-pointer">
                  <IoSearchOutline className="mr-2" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex mt-4 col-span-1 gap-x-8">
        <BsCameraVideo className="w-6 h-6 cursor-pointer" />
        <BsBell className="w-6 h-6 cursor-pointer" />
        <FaCircleUser className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
