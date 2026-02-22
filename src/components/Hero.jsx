import {Link} from "react-router-dom";


const Hero = ()=>{
    return(
        <>
        <div className=" flex gap-8  p-4 h-screen w-full text-gray-700 bg-gray-100">
            <div className="flex flex-col    min-w-2xl ">
                
                <nav className="flex justify-between items-center z-10">
                    <div className=""><Link to="/">Home</Link></div>

                    <div>
                        <ul className="flex space-x-4">
                            <li><Link to="/about">Books</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>

                <div className="flex items-center justify-center py-65  max-w-3xl ">
                    <h1 className="text-9xl text-left font-mono  ">Intimacy Empower</h1>
                </div>

                    
            </div>
            
            <div className="items-center justify-end ">
                <img 
                src="heroimg.jpeg" 
                alt="hero image" className="  object-cover"/>
                
                <div className=" flex space-x-4 max-w-3xl mx-auto">
                    <div className="flex flex-col space-y-1 leading-1" >
                        <h2 className="text-2xl font-semibold">Worlu Gift Azubike</h2>
                        <p className="font-light">8 Years Of experience</p>
                    </div>

                    <div className="flex flex-col space-y-1 leading-1" >
                        <h2 className="text-2xl font-semibold">Counsultant DR</h2>
                        <ul className="flex space-x-3 font-light *:p-4 *:rounded-full *:bg-gray-300">
                            <li>MMRs</li>
                            <li>PHD</li>
                        </ul>           
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;