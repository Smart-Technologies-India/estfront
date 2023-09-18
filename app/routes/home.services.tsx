import { Link } from "@remix-run/react";

const Services: React.FC = (): JSX.Element => {
    return (
        <>
            <div className=" p-4 my-4 w-full">
                <h1 className="text-gray-800 text-3xl font-semibold text-center">Services</h1>
                <div className="w-full flex gap-4 my-4">
                    <div className="grow bg-gray-700 h-[2px]"></div>
                    <div className="w-10 bg-gray-500 h-[3px]"></div>
                    <div className="grow bg-gray-700 h-[2px]"></div>
                </div>
                <div className="flex gap-6 flex-wrap justify-center mt-6">
                    <ServiceCard title="Marriage Applicaton" description="Users are required to fill out this online application form to avail of the Marriage Permission service from the department. Your application will be reviewed by the Establishment Section, and you will be notified of the outcome via the portal." apply="/home/marriage/" view="/home" />
                    <ServiceCard title="RoadShow Applicaton" description="Users are required to fill out this online application form to avail of the Roadshow Permission service from the department. Your application will be reviewed by the Establishment Section, and you will be notified of the outcome via the portal." apply="/home/roadshow/" view="/home" />
                    <ServiceCard title="Religious Applicaton" description="Users are required to fill out this online application form to avail of the Religious Event Permission service from the department. Your application will be reviewed by the Establishment Section, and you will be notified of the outcome via the portal." apply="/home/religious" view="/home" />
                </div>
            </div>
        </>
    );
}

export default Services;

interface ServiceCardProps {
    apply: string;
    view: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props: ServiceCardProps): JSX.Element => {
    return (
        <>
            <div className="p-4 bg-white w-96 shadow-lg hover:shadow-2xl rounded-md flex flex-col">
                <h1 className="text-2xl font-semibold ">{props.title}</h1>
                <p>{props.description}</p>
                <div className="grow"></div>
                {/* <div className="w-full h-[2px] mt-2 bg-gray-700 shrink-0"></div> */}
                <div className="flex w-full gap-4 mt-6">
                    <Link to={props.view}
                        className="py-1 text-white text-lg grow bg-indigo-500 text-center rounded-md font-medium"
                    >
                        View
                    </Link>
                    <Link to={props.apply}
                        className="py-1 text-white text-lg grow bg-indigo-500 text-center rounded-md font-medium"
                    >
                        Apply
                    </Link>
                </div>
            </div>
        </>
    );
} 