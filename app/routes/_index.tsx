import { LoaderArgs, LoaderFunction, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { SVGProps, useState } from "react";
import { array } from "zod";
import Feature from "~/components/home/feature";
import Footer from "~/components/home/footer";
import Header from "~/components/home/hader";
import HomeSection from "~/components/home/home";


const Home: React.FC = (): JSX.Element => {
  const links = [
    {
      name: "Notification for Establishment Section Daman",
      link: "#",
    },
    {
      name: "Rules for Marriage Permission",
      link: "#",
    },
    {
      name: "Procedure for Religious Procession",
      link: "#",
    },
    {
      name: "Order regarding Road show / Rally permission",
      link: "#",
    },
    {
      name: "Petroleum NOC",
      link: "#",
    },

    {
      name: "Time line for Permissions",
      link: "#",
    },

  ];

  const [menu, setMenu] = useState<boolean>(false);

  return (

    <>
      <Header></Header>
      <HomeSection></HomeSection>
      <Feature></Feature>
      <Footer></Footer>
    </>
  );
}


export default Home;



function Fa6SolidBars(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512" {...props}><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"></path></svg>
  )
}

function Fa6SolidXmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.75em" height="1em" viewBox="0 0 384 512" {...props}><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z"></path></svg>
  )
}