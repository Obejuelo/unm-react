import React, {useState, useEffect} from 'react';
import { resize, container } from '../util/resize';
import Title from '../shared/title/Title';
import Footer from '../shared/footer/Footer';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

export default function () {
    const [photos, setPhotos] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [cont, setCont] = useState('');
    const [openLightbox, setOpenLightbox] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(()=>{
        let images = [];
        fetch('http://localhost:5000/image')
            .then(res => res.json())
            .then(data => {
                data.reverse().forEach(item=>{
                    images.push({src: item.image,width: 3,height: 2})
                });
                setPhotos(images);
                // console.log(images);
            });
            function updateWidth() { resize(setWidth); }
        setCont(container(width));
        window.addEventListener('resize', updateWidth);
        
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, [width, cont]);

    const changeLightbox = (event, obj) => {
        setCurrentImage(obj.index)
        setOpenLightbox(true)
    }

    const closeLightbox = () => {
        setCurrentImage(0)
        setOpenLightbox(false)
    }

    const gotoPrevious = () => {
        setCurrentImage(currentImage - 1)
    }
    const gotoNext = () => {
        setCurrentImage(currentImage + 1)
    }

    return (
        <div className="page">
            <Title title='Galería' />
            <div className="my-3"></div>
            <div className={cont}>
                {
                    photos.length !== 0 
                    ?   <Gallery photos={photos} onClick={changeLightbox}/>
                    :   <div className="progress-bar">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                }
            </div>
            <Lightbox 
                images={photos}
                onClose={closeLightbox}
                isOpen={openLightbox}
                currentImage={currentImage}
                onClickNext={gotoNext}
                onClickPrev={gotoPrevious}/>
            <Footer />
        </div>
    )
}