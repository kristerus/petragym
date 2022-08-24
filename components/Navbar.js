import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {

    return (
        <div className="navbar">
            <div className="firstNavbar">
                <Link href="/">
                    <div className="leftNavSection">
                        <Link href="/"><Image src="/logo.jpg" width="80%" height="80%" alt="logo" className="navimg" /></Link>

                        <h3>
                            <Link href="/">PETRA FITNESS </Link>
                        </h3>
                    </div>
                </Link>

                <div className="rightSection">

                    <a href="#home" className="link">Home</a>
                    <a href="#about" className="link">About Us</a>
                    <a href="#pricing" className="link">Pricing</a>
                    <a href="#gallery" className="link">Gallery</a>
                    <a href="#contacts" className="link">Contacts</a>


                </div>
            </div>
            <div className="hamburger-menu" id="secondmenu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className="menu__box">

                    <a className="menu__item" href="#home">Home</a>



                    <a className="menu__item" href="#about">About Us</a>
                    <a className="menu__item" href="#pricing" >Pricing</a>

                    <a className="menu__item" href="#gallery">Gallery</a>

                    <a href="#contacts" className="menu__item">Contacts</a>


                </ul>
            </div>
        </div>
    );
};

export default Navbar;

