import { Link } from "@remix-run/react";
import { useRef } from "react";
import {
  Fa6SolidPeopleGroup,
  IcBaselineTempleHindu,
  IconParkTwotoneDiamondRing,
} from "~/components/icons/icons";
// import gsap from "gsap";

const Services: React.FC = (): JSX.Element => {
  const title = useRef<HTMLHeadingElement | null>(null);

  // useLayoutEffect(() => {
  // let ctx = gsap.context(() => {
  //     gsap.from(".services >  div", {
  //         opacity: 0,
  //         duration: 1,
  //         y: 100,
  //         stagger: {
  //             from: "start",
  //             amount: 0.5
  //         }
  //     });
  //     gsap.from(title.current, {
  //         opacity: 0,
  //         duration: 1,
  //         y: 50,
  //     });
  // });
  // }, []);

  return (
    <>
      <div className=" p-4 my-4 w-full">
        <h1
          ref={title}
          className="text-gray-800 text-3xl font-semibold text-center"
        >
          Services
        </h1>
        <div className="services flex gap-6 flex-wrap justify-center mt-6">
          <ServiceCard
            icons={1}
            title="Marriage Applicaton"
            description="Users are required to fill out this online application form to avail of the Marriage Permission service from the department. Your application will be reviewed by the Establishment Section, and you will be notified of the outcome via the portal."
            apply="/home/marriage/"
            view="/home"
          />
          <ServiceCard
            icons={2}
            title="RoadShow Applicaton"
            description="Users are required to fill out this online application form to avail of the Roadshow Permission service from the department. Your application will be reviewed by the Establishment Section, and you will be notified of the outcome via the portal."
            apply="/home/roadshow/"
            view="/home"
          />
          <ServiceCard
            icons={3}
            title="Religious Applicaton"
            description="Users are required to fill out this online application form to avail of the Religious Event Permission service from the department. Your application will be reviewed by the Establishment Section, and you will be notified of the outcome via the portal."
            apply="/home/religious"
            view="/home"
          />
          <ServiceCard
            icons={3}
            title="Generic Applicaton"
            description="Users are required to fill out this online application form to avail of the Generic Event Permission service from the department. Your application will be reviewed by the Establishment Section, and you will be notified of the outcome via the portal."
            apply="/home/generic"
            view="/home"
          />
        </div>
      </div>
    </>
  );
};

export default Services;

interface ServiceCardProps {
  apply: string;
  view: string;
  title: string;
  description: string;
  icons: number;
}

const ServiceCard: React.FC<ServiceCardProps> = (
  props: ServiceCardProps
): JSX.Element => {
  return (
    <>
      <div className="p-4 bg-white w-96 shadow-lg hover:shadow-2xl grid place-items-center h-80 rounded-xl">
        <div className="grid place-items-center gap-2 p-6">
          {props.icons == 1 ? (
            <IconParkTwotoneDiamondRing className="text-5xl text-[#0984e3]"></IconParkTwotoneDiamondRing>
          ) : null}
          {props.icons == 2 ? (
            <Fa6SolidPeopleGroup className="text-5xl text-[#0984e3]"></Fa6SolidPeopleGroup>
          ) : null}
          {props.icons == 3 ? (
            <IcBaselineTempleHindu className="text-5xl text-[#0984e3]"></IcBaselineTempleHindu>
          ) : null}
          <h1 className="text-lg font-medium lato">{props.title}</h1>
          <p className="text-center text-sm mallanna">{props.description}</p>
          <Link
            to={props.apply}
            className="py-1 text-white text-sm bg-[#0984e3] text-center rounded-full font-medium w-28 inline-block mt-2"
          >
            Apply
          </Link>
        </div>
        {/* <div className="flex w-full gap-4 mt-2">
                    <Link to={props.view}
                        className="py-1 text-white text-lg grow bg-[#0984e3] text-center rounded-md font-medium"
                    >
                        View
                    </Link>
                </div> */}
      </div>
    </>
  );
};
