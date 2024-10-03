import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('Dark');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
const handleSwitch = (setTheme) => {
    return setTheme((theme) => (theme === 'Dark' ? 'light' : 'Dark'));
};

const Darklight = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div
            className={`flex flex-col items-center justify-center min-h-screen ${theme === 'Dark' ? 'bg-gray-800' : 'bg-white'
                }`}
        >
            <h1 className={` my-4 ${theme === 'Dark' ? 'text-white' : 'text-black'}`}>
                Dark Light mode Website
            </h1>
            <button
                className={`
        px-5 py-2.5 
        text-base 
        rounded-md 
        border-none 
        cursor-pointer 
        transition 
        duration-300 
        ease-in-out 
        hover:bg-gray-600
        ${theme === 'Dark' ? 'bg-white text-black' : 'bg-black text-white'}
    `}
                onClick={() => handleSwitch(setTheme)}
            >
                {theme === 'Dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    );
};

export default Darklight;
