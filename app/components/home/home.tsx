import { Fa6SolidPeopleGroup, GameIconsVillage, MedicalIconIHealthEducation, TablerDimensions } from "../icons/icons";

const HomeSection = () => {
    return (
        <>
            <section>
                <div className="w-full my-6">
                    <div className="flex items-center justify-center py-1 gap-2 mx-2 md:mx-auto md:w-9/12 px-4">
                        <div className="w-96 shrink-0">
                            <div className="border flex gap-4 p-4">
                                <img src="/images/profile1.jpg" alt="error" className="w-24 h-24 object-cover object-center shrink-0" />
                                <div>
                                    <h1 className="font-normal text-xl text-gray-800">Hon'ble Administrator</h1>
                                    <p className="text-gray-600 py-2 text-lg">Shri. Praful Patel</p>
                                </div>
                            </div>
                            <div className="border flex gap-4 p-4 my-4">
                                <img src="/images/profile2.png" alt="error" className="w-24 h-24 object-cover object-center shrink-0" />
                                <div>
                                    <h1 className="font-normal text-xl text-gray-800">Advisor to the Hon’ble Administrator</h1>
                                    <p className="text-gray-600 py-2 text-lg">Shri Amit Singla , IAS</p>
                                </div>
                            </div>
                        </div>
                        <div className="grow pl-16 px-4 py-4">
                            <h1 className="font-normal text-3xl text-gray-800 mb-4">About Our City</h1>
                            <p className="text-gray-600 py-2 text-xl">Daman is a city in the union territory of Daman and Diu, on India's west coast. In the north, St. Jerome Fort, also known as Nani Daman Fort, recalls the area's Portuguese colonial past. </p>
                            <p className="text-gray-600 py-2 text-xl">Across the Daman Ganga River, Moti Daman Fort holds the ruins of a Dominican monastery, plus the Basilica of Bom Jesus Church, known for its gilt altarpiece. Close by, the Chapel of Our Lady of Rosary features intricate carvings.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#eeeeee] w-full p-10 md:p-20">
                <h1 className="text-center font-normal roboto text-4xl">City Facts and Stats</h1>
                <div className="flex justify-between gap-6 mt-14">
                    <div className="grid place-items-center">
                        <TablerDimensions className="text-6xl text-[#c30734]"></TablerDimensions>
                        <h1 className="text-center font-semibold roboto text-5xl my-3">70 sq. km</h1>
                        <p className="text-gray-600 py-2 text-xl mt-4">Land Area</p>
                    </div>
                    <div className="grid place-items-center">
                        <Fa6SolidPeopleGroup className="text-6xl text-[#c30734]"></Fa6SolidPeopleGroup>
                        <h1 className="text-center font-semibold roboto text-5xl my-3">1,91,173</h1>
                        <p className="text-gray-600 py-2 text-xl">Population</p>
                    </div>
                    <div className="grid place-items-center">
                        <GameIconsVillage className="text-6xl text-[#c30734]"></GameIconsVillage>
                        <h1 className="text-center font-semibold roboto text-5xl my-3">72</h1>
                        <p className="text-gray-600 py-2 text-xl">No. of Villages</p>
                    </div>
                    <div className="grid place-items-center">
                        <MedicalIconIHealthEducation className="text-6xl text-[#c30734]"></MedicalIconIHealthEducation>
                        <h1 className="text-center font-semibold roboto text-5xl my-3">88.06%</h1>
                        <p className="text-gray-600 py-2 text-xl">Literacy Rate</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeSection;