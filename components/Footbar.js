import React from 'react'
import Emailform from "./EmailForm"
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Footbar = () => {
    return (
        <div className='footcontainer'>
            <div className='footer'>
                <Emailform />
                <div className='data'>
                    <div className="dataContainer">
                        <h2 className='footerLink'>Contacts</h2>
                        <ul>
                            <li className="contactStuff"><PhoneIcon /> <p>0683873348</p></li>
                            <li className="contactStuff"><EmailIcon /> <p>Saranda Petra Gym</p></li>
                            <li className="contactStuff">

                                <InstagramIcon /> <p>Saranda Petra Gym</p>
                            </li>
                            <li className="contactStuff"><FacebookIcon /> <p>Saranda Petra Gym</p></li>
                        </ul>
                    </div>
                    <div className="dataContainer">
                        <h2 className='footerLink'>Links</h2>
                        <ul>
                            <li className='footercolor'><a href="#home">Home</a></li>
                            <li className='footercolor'> <a href="#gallery">Gallery</a></li>
                            <li className='footercolor'><a href="#pricing">Pricing</a></li>
                            <li className='footercolor'><a href="#about">About us</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            < div className="acknowledgements" >
                <h3>Copyright Ⓒ Petra Fitness 2022</h3>
                <h3 className="lmg"> <a href="https://cycluscorporations.com"> Powered by Cyclus Corporations </a><Image src="/cycluslogo.jpg" width="20%" height="20%" alt="logo" className="navimg footimg" /></h3>
            </div >

        </div>
    )
}

export default Footbar
