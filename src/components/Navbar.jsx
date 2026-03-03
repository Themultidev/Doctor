import {Link} from "react-router-dom";
import { useState } from "react";
import Contact from "../pages/Contact";

const Navbar = ()=>{
    
    const [isOpen, setisOpen] = useState(false);
    
    const handleisOpen = ()=>{
        setisOpen(!isOpen)
    }

    return(
        <>
            {/* <div className="block md:hidden">
                <nav className="flex justify-between items-center z-10 text-lg font-thin ">

                    <div className=""><Link to="/">Home</Link></div>
                    <div>

                        <button onClick={handleisOpen}>svg</button>

                        <div className={isOpen? "block":"hidden"}>
                            <ul className=" flex flex-col space-x-4">
                                <li><Link to="/about">Books</Link></li>
                                <li><Link to="/career">Career</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        
                    </div>
                </nav>
            </div> */}

            
            <nav className=" z-10 text-lg font-thin border-b md:border-b-0 py-4 md:py-0 md:fixed md:top-0 md:left-0 md:right-0  bg-gray-200  ">
                <div className="flex justify-between items-center">
                    <div className=""><Link to="/">Home</Link></div>
                    
                    <div className=" block md:hidden">
                        <button onClick={handleisOpen}>svg</button>
                    </div>
                    
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><Link to="/about">Books</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="block  md:hidden absolute mt-5 left-0 right-0">
                    <div className={`${isOpen ? 'block' : 'hidden'} bg-amber-300 `}>
                        <ul className="flex flex-col items space-y-4 ">
                            <li><Link to="/about">Books</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>

                </div>

            </nav>
            
        
        </>
    )
}


export default Navbar;