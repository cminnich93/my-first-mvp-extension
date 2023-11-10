export default function Navbar() {
    return (
      <nav className="nav">
        <a href="/" className="site-title">
          ECO LAB
        </a>
        <ul>
            <CustomLink>Home</CustomLink>
            <CustomLink>Mission</CustomLink>
            <CustomLink>Resources</CustomLink>
            <CustomLink>Create</CustomLink>
            <CustomLink>Sign Up</CustomLink>
        </ul>
      </nav>
    )
  }
  
  function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname 


    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
            {children}
            </a>
        </li>
    )
  }