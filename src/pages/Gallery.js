import React, {useState} from 'react'
import bannerPic from '../assets/Gallery.jpg'
import {galleryList} from '../helpers/GalleryList'
import CloseIcon from '@material-ui/icons/Close'
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import  "../styles/Gallery.css"

function Gallery() {
  const [current, setCurrent] = useState(false)
  const [temp, setTemp] = useState('')
  const getImg = (imageSrc) =>{
    setTemp(imageSrc);
    setCurrent(true)
  }
  return (
    <div className='gallery'>
          <div className='banner'>
              <img src={bannerPic}/>
              <h1>Gallery</h1>
          </div>
          <div className={current ? "current open": "current"}>
            
             <img src = {temp} />
             <CloseIcon className='closeX' onClick = {() => setCurrent(false)}/>
          </div>
          <div className='galleryImages'>
              {galleryList.map((id,index) => {
                  return(
                      <div className='image' key ={index} alt ="service-images" onClick={()=> getImg(id.imageSrc)}>
                        <img src= {id.imageSrc} />
                      </div>
                  )
              })}
          </div>
          <div className='more'>
            <h2> ...See more on my social media!</h2>
            <InstagramIcon/>
            <FacebookIcon/>
          </div>
    </div>
  )
}

export default Gallery