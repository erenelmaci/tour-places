import NavbarStyle from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
      <div className={NavbarStyle["container"]}>
        <a href="aboutus">ABOUT US</a>
        <a href="foryou">FOR YOU</a>
        <a href="sercives">SERVICES</a>
        <a href="blog">BLOG</a>
        <a href="vlog">VLOG</a>
        <a href="contact">CONTACT</a>
      </div>
    </>
  )
}

export default Navbar
