import React from 'react'
import Navbar from '../../components/Navbar'
import styles from '../../assets/styles/recipeDetail'

const RecipeDetail = () => {
  return (
    <div>
      <Navbar />
      <div className='text-center'>
        <h1 style={styles.h1}>Loream Sandwich Test</h1>
        <img src={require("../../assets/images/Rectangle313.jpg")} />
      </div>
    </div>
  )
}

export default RecipeDetail