import React, { useState } from 'react'
import { BiLike } from 'react-icons/bi'
import { BsPlay } from 'react-icons/bs'
import { FiBookmark } from 'react-icons/fi'
import { HiMinus } from 'react-icons/hi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from '../../assets/styles/recipeDetail'

const RecipeDetail = () => {
  const [isLikeHover, setIsLikeHover] = useState(false)
  const [isBookmarkHover, setIsBookmarkHover] = useState(false)

  const handleMouseLikeEnter = () => {
    setIsLikeHover(true)
  }

  const handleMouseLikeLeave = () => {
    setIsLikeHover(false)
  }

  const handleMouseBookmarkEnter = () => {
    setIsBookmarkHover(true)
  }

  const handleMouseBookmarkLeave = () => {
    setIsBookmarkHover(false)
  }

  const like = {
    position: 'absolute',
    bottom: '-35%',
    left: '83%',
    transform: 'translate(-50%, -50%)',
    MsTransform: 'translate(-50%, -50%)',
    backgroundColor: isLikeHover ? '#EFC81A' : '#FFFFFF',
    color: isLikeHover ? 'white' : '#EFC81A',
    fontSize: '16px',
    padding: '6px 12px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px'
  }

  const bookmark = {
    position: 'absolute',
    bottom: '-35%',
    left: '79%',
    transform: 'translate(-50%, -50%)',
    MsTransform: 'translate(-50%, -50%)',
    backgroundColor: isBookmarkHover ? '#FFFFFF' : '#EFC81A',
    color: isBookmarkHover ? 'black' : 'white',
    fontSize: '16px',
    padding: '6px 12px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px'
  }

  return (
    <div>
      <Navbar />
      <div className='text-center mb-5' style={styles.recipeDetail}>
        <h1 style={styles.h1} className='py-5'>Loream Sandwich</h1>
        <img src={require('../../assets/images/Rectangle313.jpg')} width={1082} height={700} />
        <button className='border border-warning' style={like} onMouseEnter={handleMouseLikeEnter} onMouseLeave={handleMouseLikeLeave}>
          <BiLike size={20} />
        </button>
        <button className='border border-warning' style={bookmark} onMouseEnter={handleMouseBookmarkEnter} onMouseLeave={handleMouseBookmarkLeave}>
          <FiBookmark size={20} />
        </button>
        <div className='text-start' style={styles.recipeInfo}>
          <h1>Ingredients</h1>
          <ul style={styles.ul} className='py-3'>
            <li><HiMinus /> 2 eggs</li>
            <li><HiMinus /> 2 tbsp mayonnaise</li>
            <li><HiMinus /> 3 slices bread</li>
            <li><HiMinus /> A little butter</li>
            <li><HiMinus /> ⅓ carton of cress</li>
            <li><HiMinus /> 2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese</li>
            <li><HiMinus /> Crisps, to serve</li>
          </ul>
          <h1>Video Step</h1>
          <ul style={styles.ul}>
            <li className='py-3'><button style={styles.btn}><BsPlay size={30} /></button></li>
            <li className='py-3'><button style={styles.btn}><BsPlay size={30} /></button></li>
            <li className='py-3'><button style={styles.btn}><BsPlay size={30} /></button></li>
            <li className='py-3'><button style={styles.btn}><BsPlay size={30} /></button></li>
          </ul>
          <div className="mb-3" style={styles.textarea}>
            <textarea className="form-control" id="comment" rows="9" placeholder='Comment :'></textarea>
            <div className='py-4 text-center'>
              <button style={styles.send}>Send</button>
            </div>
          </div>
          <h1>Comment</h1>
          <div className='row'>
            <div className='col-1'>
              <img src={require('../../assets/images/Ellipse128.jpg')} />
            </div>
            <div className='col-10'>
              <b>Ayudia</b>
              <p>Nice recipe. Simple and delicious, thank you</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RecipeDetail