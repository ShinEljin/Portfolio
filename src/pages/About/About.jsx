import Skills from "./Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-white font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              As a 3rd year student at PLM pursuing a degree in Computer Science
              and an aspiring web developer with knowledge in both front-end and
              back-end development, I am passionate about creating beautiful,
              functional, and user-friendly websites. I specialize in using
              technologies such as React with Next.js, Material UI, and Tailwind
              for my CSS frameworks and Express.js and MongoDB for my back-end
              development. These technologies allow me to create responsive and
              visually appealing web pages that adapt to different screen sizes
              and devices, as well as building robust web applications.
            </p>

            <p className="text-sm text-gray-400 leading-6 mb-3">
              I am an persevering person who is always looking to learn more
              about how the web works. I am constantly seeking new challenges
              and opportunities to improve my skills and knowledge. My ultimate
              goal is to become a skilled and experienced web developer, who can
              create websites that can help make a difference in the world.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I am excited to share my work with you and I would be happy to
              discuss any web development projects you may have. Please feel
              free to take a look around my website, and if you have any
              questions or comments, please don't hesitate to contact me. Thank
              you for visiting my website!
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
