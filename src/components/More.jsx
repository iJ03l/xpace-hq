import React from 'react' 
import { GrSolaris } from "react-icons/gr";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";
import CountUp, { useCountUp } from "react-countup";
import Speedometer from "../assets/images/speedometer.png";
import Tool from "../assets/images/tool.png";
import Distance from "../assets/images/distance.png";
import Africa from "../assets/images/Africa.png";


    
function More() {

useCountUp({
  ref: "counter",
  end: 1234567,
  enableScrollSpy: true,
  scrollSpyDelay: 1000,
    });

  return (
    <div>
      <div
        className="max-w-[85rem] bg-blue-100 md:mt-20 mx-auto px-[2rem] flex flex-col overflow-hidden md:mr-0"
        id="about"
      >
        <div className="grid grid-cols-12 md:gap-10 relative text-black">
          <div className="md:col-span-6 col-span-12  md:pr-0  flex flex-col items-start justify-center w-full">
            <h2 className="text-[#041dff] uppercase my-5 font-outfit text-2xl">
              about us
            </h2>
            <div>
              <div className="orange-circle"></div>
              <h1 className="capitalize text-[#1F2541] md:pr-0 font-bold md:text-5xl text-2xl">
                Xpace: Empowering Businesses with Cutting-Edge Digital Expertise
              </h1>
            </div>
          </div>
          <div className="md:col-span-6 hidden col-span-12 md:flex md:w-3/4 h-full items-center text-[#1F2541] md:mb-0 mb-4 justify-center md:pr-0">
            <p>
              <span className="text-yellow-900">Xpace</span>, is a dynamic
              agency specializing in mobile app and web development,
              hosting/deployment, UI/UX design, consultancy, and cybersecurity.
              With a passion for delivering cutting-edge solutions, we empower
              businesses to thrive in the digital landscape. Our team of experts
              combines creativity, technical prowess, and strategic thinking to
              create exceptional digital experiences. From intuitive interfaces
              to robust cybersecurity measures, Xpace is your trusted partner
              for digital success.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-black justify-center h-full max-w-[50rem] mx-auto mt-10">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12  mb-5">
              <p>
                At Xpace, we revolutionize the digital landscape through
                innovation, security, and client delight. With cutting-edge
                solutions and robust cybersecurity measures, we ensure success
                in an interconnected world. Make us your partner on the journey
                to digital excellence.
              </p>
            </div>
            <div className="col-span-12 flex flex-col gap-5">
              <span className="carder">
                <img src={Speedometer} alt="" />
              </span>
              <span>
                <p>
                  <span className="font-bold">Innovation</span> At Xpace, we are
                  committed to pushing the boundaries of technology and
                  delivering innovative solutions. We stay up-to-date with the
                  latest industry trends and leverage emerging technologies to
                  create digital experiences that are ahead of the curve.
                </p>
              </span>
            </div>
            <div className="col-span-12 flex flex-col gap-5 my-10">
              <span className="carder">
                <img src={Tool} alt="" />
              </span>
              <span>
                <span className="font-bold">Security:</span> We prioritize the
                security of our clients' digital assets. With the increasing
                threat of cyberattacks, we implement robust cybersecurity
                measures to safeguard sensitive data and protect against
                potential breaches. Our proactive approach ensures that our
                clients can trust their digital infrastructure is secure.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 flex flex-col gap-5">
              <span className="carder">
                <img src={Distance} alt="" />
              </span>
              <span>
                <p>
                  <span className="font-bold">Customer Satisfaction: </span> We
                  place a strong emphasis on customer satisfaction and strive to
                  exceed expectations in every project. We actively listen to
                  our clients' needs, provide transparent communication
                  throughout the process, and deliver high-quality solutions
                  that meet their objectives. Our goal is to build long-lasting
                  partnerships based on trust and mutual success.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center mb-14 md:mb-0 bg-blue-100 pt-20">
        <div className="md:w-2/4 flex flex-col items-center justify-center pt-10">
          <h1 className="font-bold text-violet-500 text-2xl uppercase">
            Tales of Success
          </h1>
          <p className="md:text-5xl text-3xl text-center text-[#1B213E] font-thin px-3 md:mx-0">
            Our numbers over the years
          </p>
        </div>

        <div className="w-full md:hidden flex justify-center items-center">
          <img src={Africa} alt="Africa" className="w-3/4" />
        </div>

        <div className="grid grid-cols-12">
          <div className="md:col-span-6 col-span-12 text-black flex flex-col gap-5 items-center justify-center">
            <div className="flex items-cetner">
              <div className="flex flex-row gap-3">
                <div className="flex items-center justify-center text-5xl text-violet-500">
                  <GiEarthAfricaEurope />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-5xl">
                    <CountUp end={999} enableScrollSpy />+
                  </span>
                  <span className="text-sm font-bold">
                    Clients 
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-cetner">
              <div className="flex flex-row gap-3">
                <div className="flex items-center justify-center text-violet-500 text-5xl">
                  <GrSolaris />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-5xl">
                    <CountUp end={99} enableScrollSpy />+
                  </span>
                  <span className="text-sm font-bold">Solutions</span>
                </div>
              </div>
            </div>
            <div className="flex items-cetner">
              <div className="flex flex-row gap-3">
                <div className="flex items-center text-5xl justify-center text-violet-500">
                  <BsFillPatchCheckFill />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-5xl">
                    <CountUp end={100} enableScrollSpy />%
                  </span>
                  <span className="text-sm font-bold">Satisfactions</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 md:flex items-center justify-center w-full hidden">
            <div>
              <img src={Africa} alt="Africa" className="md:w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More