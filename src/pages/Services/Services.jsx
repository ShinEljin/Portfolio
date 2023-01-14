import { FaReact, FaNodeJs, FaServer } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMaterialui } from "react-icons/si";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    icon: <FaReact />,
    title: "Front-End Development",
    description:
      "React and Next.js involves building dynamic and interactive user interfaces for websites using the React JavaScript library and the framework Next.js for server-side rendering and improved performance.",
  },
  {
    id: 2,
    icon: <SiMaterialui />,
    title: "Material UI",
    description:
      "Material-UI library provides pre-built React components that implement Google's Material Design guidelines, allowing for the creation of visually consistent and intuitive user interfaces.",
  },
  {
    id: 3,
    icon: <SiTailwindcss />,
    title: "Tailwindcss",
    description:
      "Tailwind CSS library provides a set of utility classes for building responsive and consistent user interfaces, allowing developers to quickly prototype and build efficient and lightweight front-end designs.",
  },
  {
    id: 4,
    icon: <FaNodeJs />,
    title: "Back-End Development",
    description:
      "Node.js and Express involves utilizing the Node.js runtime environment and the Express.js framework to build efficient and scalable server-side applications, allowing for easy routing and handling of requests and responses",
  },
  {
    id: 5,
    icon: <SiMongodb />,
    title: "MongoDB",
    description:
      "MongoDB database management system to store and manage large amounts of data, allowing for easy scalability and flexible data modeling.",
  },
  {
    id: 6,
    icon: <FaServer />,
    title: "REST Api",
    description:
      "Building RESTful APIs utilizing the Express.js framework to define routes and handle HTTP requests and responses, allowing for easy creation of lightweight and scalable APIs that adhere to the REST architectural style.",
  },
];

const Services = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
