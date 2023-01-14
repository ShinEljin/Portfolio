import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profile from "../images/profile.jpg";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/ShinEljin",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/raphael-enciso-7202a9250/",
  },
];

const ProfileBox = () => {
  return (
    <aside className="sticky top-0 bg-[#242526]  md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="raphael-enciso" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-white font-bold mb-1">Raphael Enciso</h1>
        <p className="text-sm text-gray-400 mb-3">
          BS Computer Science Student at
          <a
            href="https://www.plm.edu.ph/"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 pl-1"
          >
            PLM
          </a>
        </p>
        <a
          href="#0"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          Goal
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          As a web developer, I am always looking to stay up-to-date with the
          latest technologies and trends in the industry. I am a strong believer
          in the power of open-source software and regularly contribute to
          various open-source projects. Additionally, I am a firm believer in
          the importance of continuous learning, and I always make time to
          explore new frameworks, libraries, and tools that can help improve my
          skills.
        </p>
      </div>
    </aside>
  );
};

export default ProfileBox;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-[#242526] hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
