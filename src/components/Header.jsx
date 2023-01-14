import headerImage from "../images/header.jpg";

function Header() {
  return (
    <div>
      <div className="h-60 w-full">
        <img
          src={headerImage}
          alt="cover"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}

export default Header;
