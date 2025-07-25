import { NavLink } from 'react-router-dom';


export default function Logo() {
    return (
        <NavLink to="/">
        <h1 className="bg-gradient-to-r from-green via-blue to-green 
              bg-[length:200%] bg-left 
              hover:bg-right 
              transition-all duration-700 ease-in-out
              text-transparent bg-clip-text 
              inline-block font-logo font-bold text-logo">
            Mymbá.
          </h1>
      </NavLink>
    )
}