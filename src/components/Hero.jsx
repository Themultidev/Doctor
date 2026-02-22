import {Link} from "react-router-dom";


const Hero = ()=>{
    return(
        <>
        <div className=" grid grid-cols-[2fr_1fr] bg-amber-300 p-4 h-screen">
            <div className="flex flex-col  p-3 ">
                
                <nav className="flex justify-between items-center">
                    <div className=""><Link to="/">Home</Link></div>

                    <ul className="flex space-x-4">
                        <li><Link to="/about">Books</Link></li>
                        <li><Link to="/career">Career</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="flex items-center justify-center py-20 max-w-3xl ">
                    <h1 className="text-9xl ">Intimacy Empower</h1>
                </div>

                <div></div>

                
            </div>
            
            <div className="min-w-full">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50aW1hY3klMjBpbXBob3JlfGVufDB8fDB8fHww&w=1000&q=80" alt="hero image" className="w-full h-full object-cover"/>
                
                <div className=" flex space-x-4 max-w-3xl mx-auto">
                    <div className="flex flex-col space-y-3 text-2xl font" >
                        <p>Worlu Gift Azubike</p>
                        <p>8 Years Of experience</p>
                    </div>

                    <div className="flex flex-col space-y-3" >
                        <p>Counsultant DR</p>
                        <div className="flex space-x-3">
                            <p>MMRs</p>
                            <p>PHD</p>
                        </div>           
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;