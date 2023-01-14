import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import About from "../pages/About/About.jsx";
import Portfolio from "../pages/Portfolio/Portfolio.jsx";
import Services from "../pages/Services/Services.jsx";
import Contact from "../pages/Contact.jsx";

const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/about",
  },
  {
    id: 2,
    title: "Services",
    to: "/services",
  },
  {
    id: 3,
    title: "Works",
    to: "/works",
  },
  {
    id: 4,
    title: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <Router>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-[#242526] shadow rounded">
        <ul className="flex flex-wrap">
          {navbarData.map((data, id) => (
            <LinkItem data={data} key={id} />
          ))}
        </ul>
      </nav>

      <Routes>
        <Route path="/">
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="works" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.data;
  return (
    <li className="m-3 lg:mx-5 text-white text-medium hover:text-purple-600 ">
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-purple-600" : undefined)}
      >
        {title}
      </NavLink>
    </li>
  );
};
