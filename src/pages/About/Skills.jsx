const skillData = [
  {
    id: 1,
    title: "Html, Css, Scss",
    percentage: "90%",
  },
  {
    id: 2,
    title: "Material UI",
    percentage: "65%",
  },
  {
    id: 3,
    title: "TailwindCSS",
    percentage: "80%",
  },
  {
    id: 4,
    title: "Javascript",
    percentage: "85%",
  },
  {
    id: 5,
    title: "ReactJS",
    percentage: "75%",
  },
  {
    id: 6,
    title: "ExpressJS",
    percentage: "75%",
  },
  {
    id: 7,
    title: "MongoDB",
    percentage: "85%",
  },
  {
    id: 8,
    title: "Git, Github",
    percentage: "50%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-dark-text-primary font-bold mb-4">
              Skills
            </h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

const SkillItem = (props) => {
  const { title, percentage } = props.skill;
  return (
    <div className="w-full md:w-1/2">
      <div className="mb-4 md:mx-4">
        <div className="flex justify-between items-center mb-1">
          <h5 className="text-md text-dark-text-secondary font-light">
            {title}
          </h5>
          <span className="text-md text-primary-main font-bold">
            {percentage}
          </span>
        </div>
        <div className="w-full bg-purple-200 relative h-2 rounded">
          <div
            className="absolute h-full left-0 top-0 bg-primary-main rounded"
            style={{ width: `${percentage}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
