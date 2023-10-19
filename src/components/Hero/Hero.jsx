import { FaReact } from "react-icons/fa";
import profilepic from "../../assets/profilepic.jpg";
import resume from '../../assets/resume.pdf';

export default function Hero() {
  return (
    <div
      className="md:m-6 w-[2/3]  flex flex-col 
    md:flex-row md:justify-around items-center text-white"
    >
      <div className="div">
        <img
          src={profilepic}
          width={350}
          height={400}
          className="rounded-3xl z-10 md:ms-10 scale-200 
          shadow-xl shadow-gray-800  "
        />
      </div>
      <div className="z-10 text-center h-auto">
        <h1 className="text-3xl m-2 font-mono text-white">Hello🐱‍🏍</h1>
        <span className="text-3xl block m-5">I am<span className="text-[50px] space-x-3">Sanjay Krishnan</span></span>
        <span className="text-2xl mt-4">And I am a FullStack Developer</span>
        <div className="mt-1 md:mt-5 md:flex justify-center hidden">
          <span>
            <FaReact size={100} className="hover:animate-spin" />
          </span>
        </div>
        <button className="bg-red-600 rounded-md p-2 mt-5"><a href={resume}>Know More!</a></button>
      </div>
    </div>
  );
}
