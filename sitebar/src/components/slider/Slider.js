import React,{useState} from 'react'
// styles 
import styles from './slider.module.scss'

//import photo
import firstImg from './sliderImg/first.jpg'
import secondImg from './sliderImg/second.jpg'
import thirdImg from './sliderImg/third.jpg'
import fourthImg from './sliderImg/fourth.jpg'
import fivesImg from './sliderImg/fives.jpg'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const slidesPhoto = [
    {
        photo: firstImg,
    },
    {
        photo: secondImg,
    },
    {
        photo: thirdImg,
    },
    {
        photo: fourthImg,
    },
    {
        photo: fivesImg,
    },

]

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesPhoto.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesPhoto.length) % slidesPhoto.length);
  };
  return (
    <>
        <div className={styles.slider}>

            <button onClick={prevSlide} className={styles.prevBtn}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <img
                className={styles.sliderImg}
                src={slidesPhoto[currentSlide].photo}
                alt={`Slide ${currentSlide}`}
            />
            
            <button onClick={nextSlide} className={styles.nextBtn}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>

    </>
  )
}

export default Slider

