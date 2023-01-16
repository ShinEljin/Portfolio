import Skills from "./Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-dark-text-primary font-bold mb-4">
              Who am I?
            </h3>
            <p className="text-sm text-dark-text-secondary leading-6 mb-3">
              Hello there, I am Raphael a 3rd year student at PLM pursuing a
              degree in Computer Science and an aspiring web developer with
              knowledge in both front-end and back-end development. I am
              passionate about creating beautiful, functional, and user-friendly
              websites. I am an persevering person who is always looking to
              learn more about how the web works. I am constantly seeking new
              challenges and opportunities to improve my skills and knowledge.
            </p>

            <p className="text-sm text-dark-text-secondary leading-6 mb-3">
              My ultimate goal is to become a skilled and experienced web
              developer, who can create websites that can help make a difference
              in the world. I am excited to share my work with you and I would
              be happy to discuss any web development projects you may have.
              Please feel free to take a look around my website, and if you have
              any questions or comments, please don't hesitate to contact me.
              Thank you for visiting my website!
            </p>
            <p className="text-sm text-dark-text-secondary leading-6 mb-3"></p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
