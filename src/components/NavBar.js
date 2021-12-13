const Navbar = () => {
  //_rafce
  return (
    <nav className="navbar">
      <div className="container">
        <p className="navbar-logo">
          <i className="fas fa-code"></i>
          <span> DK</span>
        </p>
        <ul className="nav-links">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
