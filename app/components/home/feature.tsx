const Feature = () => {
    return (
        <>
            <section className="bg-white p-20">
                <h1 className="text-black text-4xl font-semibold mt-10 font-sans text-center lg:text-left">Provided Features</h1>
                <div className="flex gap-6 mt-6 flex-col lg:flex-row relative items-center justify-between">
                    <div className="w-80 md:w-96 h-[32rem] rounded-xl relative overflow-hidden group">
                        <img src="/images/marriage.jfif" alt="service one" className="w-full h-full absolute top-0 left-0 object-cover object-center rounded-xl" />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 rounded-b-xl h-40 md:h-36 translate-y-40 md:translate-y-40 group-hover:translate-y-0 transition-all">
                            <h1 className="text-gray-300 text-left text-xl font-semibold font-sans">Marriage Permission</h1>
                            <p className="leading-6 text-gray-300 text-left text-sm font-medium font-sans">Get marriage permission online, Fill form,Submit Relevant Documents and get permission through SMS. </p>
                        </div>
                    </div>
                    <div className="w-80 md:w-96 h-[32rem] rounded-lg relative overflow-hidden group">
                        <img src="/images/religious_event.jpg" alt="service two" className="w-full h-full absolute top-0 left-0 object-cover object-center rounded-xl" />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 rounded-b-xl hh-40 md:h-36 translate-y-40 md:translate-y-40  group-hover:translate-y-0 transition-all">
                            <h1 className="text-gray-300 text-left text-xl font-semibold font-sans">Religious Permission</h1>
                            <p className="leading-6 text-gray-300 text-left text-sm font-semibold font-sans">Get religious permission online, Fill form,Submit Relevant Documents and get permission through SMS. </p>
                        </div>
                    </div>
                    <div className="w-80 md:w-96 h-[32rem] rounded-lg relative overflow-hidden group">
                        <img src="/images/roadshow.jpg" alt="service three" className="w-full h-full absolute top-0 left-0 object-cover object-center rounded-xl" />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 rounded-b-xl h-40 md:h-36 translate-y-40 md:translate-y-40  group-hover:translate-y-0 transition-all">
                            <h1 className="text-gray-300 text-left text-xl font-semibold font-sans">Road Show/Rally Permission</h1>
                            <p className="leading-6 text-gray-300 text-left text-sm font-semibold font-sans">Get rally permission online, Fill form,Submit Relevant Documents and get permission through SMS. </p>
                        </div>
                    </div>
                    <div className="w-80 md:w-96 h-[32rem] rounded-lg relative overflow-hidden group">
                        <img src="/images/cinema.jpg" alt="service three" className="w-full h-full absolute top-0 left-0 object-cover object-center rounded-xl" />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 rounded-b-xl h-40 md:h-36 translate-y-40 md:translate-y-40  group-hover:translate-y-0 transition-all">
                            <h1 className="text-gray-300 text-left text-xl font-semibold font-sans">Movie Shooting/Big Events</h1>
                            <p className="leading-6 text-gray-300 text-left text-sm font-semibold font-sans">Get Movie Shooting/Big Events permission online, Fill form,Submit Relevant Documents and get permission through SMS. </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Feature;