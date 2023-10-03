import { Link } from "@remix-run/react";

const Header = () => {
    return (
        <>
            <div>
                <header className="flex items-center py-4 gap-2 mx-2 md:mx-auto md:w-9/12 px-4">
                    <img src="/images/emb.jpg" alt="logo" className="w-16 h-20 object-contain object-center" />
                    <div className="bg-green grid place-items-center">
                        <div>
                            <h1 className="font-medium text-2xl text-black">Establishment Section</h1>
                            <h1 className="font-medium text-2xl text-black">UT of Daman</h1>
                        </div>
                    </div>
                    <div className="grow"></div>
                    <img src="/images/g2.png" alt="logo" className="w-56 h-20 object-contain object-center" />
                    <img src="/images/logo.png" alt="logo" className="w-24 h-20 object-cover object-center" />
                </header>
            </div>

            <div className="bg-[#eeeeee]">
                <div className="flex items-center py-4 gap-2 mx-2 md:mx-auto md:w-9/12 px-4">
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2" to="/" >Home</Link>
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2" to="/about" >About</Link>
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2" to="/home/services" >Marriage</Link>
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2" to="/home/services" >Roadshow</Link>
                    <Link className="roboto text-2xl hover:text-[#c30734] font-medium text-gray-800 px-2" to="/home/services" >Religious</Link>
                    <div className="grow"></div>
                    <Link className="roboto text-xl font-medium text-white px-4 bg-cyan-500 rounded-md py-1" to="/mobilelogin" >Login</Link>
                    <Link className="roboto text-xl font-medium text-white px-2 bg-indigo-500 rounded-md py-1" to="/login" >Staff Login</Link>
                </div>
            </div>
            <div className="w-full grid grid-cols-8">
                {
                    Array.from({ length: 8 }).map((val: unknown, index: number) => {
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