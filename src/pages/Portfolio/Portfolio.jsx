import image1 from "../../images/portfolio/project-01.png";
import image2 from "../../images/portfolio/project-02.png";

import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "Barangay 564 Management System",
    link: "#0",
    description:
      "Software Engineering Project, developed by me using tailwindcss and MERN tech stack.",
  },
  {
    id: 2,
    image: image2,
    title: "Facebook Clone",
    link: "#0",
    description: "Facebook clone using nextJS and  Material UI.",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
