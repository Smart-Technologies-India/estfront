import { Link } from "@remix-run/react";

const Header = () => {
    return (
        <>
            <div>
                <header className="flex items-center py-4 gap-2 mx-2 md:mx-auto md:w-9/12 px-4">
                    <img src="/images/emb.jpg" alt="logo" className="w-16 h-20 object-contain object-center" />
                    <div className="bg-green grid place-items-center">
                        <div>
                            <h1 className="font-medium text-2xl text-black">Establishment Section Collectorate</h1>
                            <h1 className="font-medium text-2xl text-black">UT of Daman</h1>
                        </div>
                    </div>
                    <div className="grow"></div>
                    <img src="/images/g2.png" alt="logo" className="w-56 h-20 object-contain object-center hidden lg:inline-block" />
                    <img src="/images/logo.png" alt="logo" className="w-24 h-20 object-cover object-center hidden lg:inline-block" />
                </header>
            </div>

            <div className="bg-[#eeeeee]">
                <div className="flex items-center py-4 gap-2 mx-2 md:mx-auto md:w-9/12 px-4">
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2" to="/" >Home</Link>
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2 hidden sm:inline-block" to="/about" >About</Link>
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2 hidden sm:inline-block" to="/home/services" >Marriage</Link>
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2 hidden sm:inline-block" to="/home/services" >Roadshow</Link>
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2 hidden sm:inline-block" to="/home/services" >Religious</Link>
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2 hidden sm:inline-block" to="/home/services" >Generic</Link>
                    <div className="grow"></div>
                    <Link className="roboto text-xl font-medium text-white px-4 bg-cyan-500 rounded-md py-1 shrink-0" to="/mobilelogin" >Login</Link>
                    <Link className="roboto text-xl font-medium text-white px-2 bg-[#0984e3] rounded-md py-1 shrink-0" to="/login" >Staff Login</Link>
                </div>
            </div>
            <div className="w-full sm:grid grid-cols-4 lg:grid-cols-8 hidden">
                {
                    Array.from({ length: 8 }).map((val: unknown, index: number) => {
                        return (
                            <img key={index} src={`/banner/${index + 1}.jpg`} alt={`banner${index + 1}`} className="h-40 w-full object-cover object-top" />
                        );
                    })
                }
            </div>
            <div className="w-full grid grid-cols-2 sm:hidden">
                {
                    Array.from({ length: 4 }).map((val: unknown, index: number) => {
                        return (
                            <img key={index} src={`/banner/${index + 1}.jpg`} alt={`banner${index + 1}`} className="h-40 w-full object-cover object-top" />
                        );
                    })
                }
            </div>
        </>
    );
}

export default Header;