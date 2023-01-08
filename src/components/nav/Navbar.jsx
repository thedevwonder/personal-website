import NavElements from "./NavElements";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <NavElements link="/blogs" text="Blogs" />
      <NavElements link="/projects" text="Projects" />
      <NavElements link="/" text="Home" />
    </div>
  );
};

export default Navbar;
