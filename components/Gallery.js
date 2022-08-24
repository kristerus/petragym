import React from 'react'
import Image from 'next/image'

const Gallery = () => {
    return (
        <div className="galleryContainer">
            <h1 className='galleryTitle'>Gallery</h1>
            <div className='imageContainer'>
                <div className='galleryImage'><Image src="/img2.jpeg" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/img3.jpeg" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/img4.jpeg" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>
                <div className='galleryImage'><Image src="/img5.jpeg" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/img6.jpeg" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/img7.jpeg" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/img8.jpeg" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/img9.jpeg" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage' id="optional"> <Image src="/img10.png" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' id="optional" /></div>

                <div className='galleryImage' id="optional"> <Image src="/img11.png" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage ' id="optional" /></div>

                <div className='galleryImage' id="optional"><Image src="/img12.png" width="350px" height="350px" alt="Petra Gym Image" className='galleryImag ' id="optional" /></div>

                <div className='galleryImage' id="optional"><Image src="/img13.png" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage ' id="optional" /></div>

                <div className='galleryImage' id="optional"> <Image src="/img14.png" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage ' id="optional" /></div>

                <div className='galleryImage' id="optional"> <Image src="/img15.png" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage ' id="optional" /></div>

                <div className='galleryImage' id="optional"> <Image src="/img16.jpeg" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage ' id="optional" /></div>

                <div className='galleryImage' ><Image src="/img17.jpeg" width="350px" height="350px" alt="Petra Gym Image" className="galleryImage" /></div>
                <div className='galleryImage'> <Image src="/img1.png" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>
                <div className='galleryImage'> <Image src="/img19.png" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>
                <div className='galleryImage' id="optional"> <Image src="/img20.png" width="350px" height="350px" alt="Petra Gym Image" className='galleryImage' /></div>





            </div >
        </div>
    )
}

export default Gallery;