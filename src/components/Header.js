import React,{useState} from 'react'
import { RiMenu3Fill } from "react-icons/ri";

function Header(){
    // create a state when clicking on hamburger menu header is shown 
    const[showHeader,setShowHeader] = useState(false)
    return(
        <div className="header">
             
             <RiMenu3Fill className='position-fixed  top-0 end-0' />

        </div>
    )
}

export default Header