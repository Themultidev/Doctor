import {Link} from "react-router-dom";


const Hero = ()=>{
    return(
        <>
        <div className="py-5">
            <div className=" flex gap-8  p-4 h-full w-full text-gray-800 bg-gray-100">
                <div className="flex flex-col    min-w-2xl ">
                    
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

                    <div className="flex items-center justify-center py-65  max-w-3xl ">
                        <h1 className="text-9xl text-left font-mono  ">Intimacy Empower</h1>
                    </div>

                        
                </div>
                
                <div className=" ">
                    <img 
                    src="heroimg.jpeg" 
                    alt="hero image" className="  object-cover"/>
                    
                    <div className=" flex space-x-4 max-w-3xl mx-auto ">
                        <div className="flex flex-col space-y-1 leading-1" >
                            <h2 className="text-2xl font-semibold font-mono">Worlu Gift Azubike</h2>
                            <h2 className="text-2xl font-semibold font-mono">Counsultant DR</h2>
                            <p className="font-light text-sm">8 Years Of experience</p>
                            <ul className="flex space-x-3 font- font-mono *:p-4 *:rounded *:bg-gray-900 text-amber-50">
                                <li>MMRs</li>
                                <li>PHD</li>
                            </ul>   
                            <ul>
                                <li></li>
                            </ul>
                            
                        </div>

                    </div>
                    <p className="max-w-2xl mt-4 text-gray-600 font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.

                    </p>


                </div>
            </div>
            <div className="flex items-center justify-center border-t border-b p-1 bg-gray-100">
                <ul className="flex space-x-4 font-mono text-thin *:p-1 *: *:border-1* *:border-gray-700 *:border-b">
                    <li>Book a consultation</li>
                    <li><span>Learn More</span> <span></span></li>
                </ul>
            </div>
       </div>
        </>
    )
}

export default Hero;