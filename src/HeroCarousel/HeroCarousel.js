import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const HeroCarousel = () => {
  return (
    <>
    
    <Slider {...settings}>
      <div className='bg'>
        <div className="slide">
          <div className=''>
          <h2>We help you Achive your big dream</h2>
          <p>Kickstart your career by starting early. Admizz helps you the right course at right university</p>
          <button className='btn'>Book Counselling Sessions</button>
          <div className='links'>
            <a href='https://admizz.com/'>Example Link</a>
          </div>
          </div>
          <div className=''>
          <img className='image_aline' alt='imag' src='https://img.freepik.com/free-photo/front-view-female-student-red-shirt-with-backpack-holding-books-files-smiling-blue-wall_140725-38370.jpg?w=1060&t=st=1677344562~exp=1677345162~hmac=87aa91f47c3d375cddb75b2c2ab3a2ba8b8dad50238111b2be708aa2b921ddaf'/>
          <h2>Example image</h2>
          </div>
        </div>
      </div>
      <div className='bg'>
        <div className="slide">
        <div className=''>
          <h2>We help you Achive your big dream</h2>
          <p>Kickstart your career by starting early. Admizz helps you the right course at right university</p>
          <button className='btn'>Book Counselling Sessions</button>
          <div className='links'>
            <a href='https://admizz.com/'>Example Link</a>
          </div>
        </div>
          <div className=''>
          <img className='image_aline' alt='imag' src='https://img.freepik.com/free-photo/front-view-female-student-red-shirt-with-backpack-holding-books-files-smiling-blue-wall_140725-38370.jpg?w=1060&t=st=1677344562~exp=1677345162~hmac=87aa91f47c3d375cddb75b2c2ab3a2ba8b8dad50238111b2be708aa2b921ddaf'/>
          <h2>Example image</h2>
          </div>
        </div>
      </div>
      <div className='bg'>
        <div className="slide">
        <div className=''>
          <h2>We help you Achive your big dream</h2>
          <p>Kickstart your career by starting early. Admizz helps you the right course at right university</p>
          <button className='btn'>Book Counselling Sessions</button>
          <div className='links'>
            <a href='https://admizz.com/'>Example Link</a>
          </div>
          </div>
          <div className=''>
          <img className='image_aline' alt='imag' src='https://img.freepik.com/free-photo/front-view-female-student-red-shirt-with-backpack-holding-books-files-smiling-blue-wall_140725-38370.jpg?w=1060&t=st=1677344562~exp=1677345162~hmac=87aa91f47c3d375cddb75b2c2ab3a2ba8b8dad50238111b2be708aa2b921ddaf'/>
          <h2>Example image - teja branch</h2>
          </div>
        </div>
      </div>
    </Slider>
 
    </>
  )
};

export default HeroCarousel;