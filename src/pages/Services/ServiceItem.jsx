const ServiceItem = (props) => {
  const { icon, title, description } = props.service;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-dark-bg-neutral group hover:shadow-md">
        <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl mb-5 bg-purple-100 text-primary-main transition duration-200 group-hover:bg-primary-main group-hover:text-dark-text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-dark-text-primary mb-2">
          {title}
        </h3>
        <p className="text-dark-text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
