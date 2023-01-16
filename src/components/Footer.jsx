const Footer = () => {
  return (
    <footer className="bg-dark-bg-neutral p-4 absolute bottom-0 left-0 w-full">
      <div className="container px-4">
        <p className="text-sm text-dark-text-secondary text-center">
          © Copyright
          <a
            className="text-primary-main"
            href="https://github.com/ShinEljin/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Raphael Enciso.
          </a>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
