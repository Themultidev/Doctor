import {Link} from "react-router-dom";

const Navbar = ()=>{
    return(
        <>

            <nav className="flex justify-between items-center z-10 text-lg font-thin">

                <div className=""><Link to="/">Home</Link></div>
                    <div>
                        <ul className="flex space-x-4">
                            <li><Link to="/about">Books</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
            </nav>
        
        </>
    )
}


export default Navbar;