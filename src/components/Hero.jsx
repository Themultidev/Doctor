import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import { ArrowUpLeft, ArrowUpRight  } from 'lucide-react';



const Hero = ()=>{
    return(
        <>
        <div className="">
            <div className="flex flex-col  lg:flex-row lg:gap-8  p-4 h-full w-full  text-gray-800 bg-gray-100">
                <div className="flex flex-col    md:min-w-2xl ">
                    
                    <Navbar/>

                    <div className="flex flex-col items-center justify-center py-20 md:py-65  md:max-w-3xl ">
                        <h1 className="text-6xl text-center  md:text-9xl  lg:text-left font-mono  ">Intimacy Empower</h1>
                        <div className="md:hidden">
                            <p className="rotate-88 text-9xl  font font-thin ml-3 animate-pulse "> {">"} </p>
                        </div>

                    </div>

                        
                </div>
                
                <div className="w-full ">
                    <img 
                    src="heroimg.jpeg" 
                    alt="hero image" className="  object-cover md:object-contain md:h-full md:w-full lg:object-cover"/>
                    
                    <div className="  max-w-3xl mx-auto ">
                        <div className="flex flex-col space-y-1 leading-1" >
                            <h2 className="text-2xl font-semibold font-mono">Worlu Gift Azubike</h2>
                            <h2 className="text-2xl font-semibold font-mono">Counsultant DR</h2>
                            <p className="font-light text-sm">8 Years Of experience</p>
                            <ul className="flex  space-x-3  font-mono *:p-4 *:rounded *:bg-gray-900 text-amber-50">
                                <li>MMRs</li>
                                <li>PHD</li>
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
                <ul className="flex space-x-4 font-mono text-thin *:p-1   *:border-gray-700 *:border-b">
                    <li>
                        <Link to="/consultation" className="inline-flex space-x-2">
                            <ArrowUpLeft size={24} color="black" />  
                            <span>Book a consultation</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/learn-more" className="inline-flex space-x-2">
                            <span>Learn More</span>
                            <ArrowUpRight size={24} color="black" />
                        </Link>
                    </li>
                    
                </ul>
            </div>
       </div>
        </>
    )
}

export default Hero;