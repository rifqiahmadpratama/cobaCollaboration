import React, { useCallback, useState } from 'react'
import cuid from 'cuid'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RecipePhotoDropzone from '../../components/RecipePhotoDropzone'
import styles from '../../assets/styles/recipeAdd'

const RecipeAdd = () => {
  const [images, setImages] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='text-center mb-5' style={styles.recipeAdd}>
        <h1 style={styles.h1} className='py-5'>Add Recipe</h1>
        <RecipePhotoDropzone onDrop={onDrop} />
        <div class="mb-3 py-3" style={styles.form}>
          <input type="text" class="form-control" id="title" placeholder="Title" />
        </div>
        <div class="mb-3 py-3" style={styles.form}>
          <textarea class="form-control" id="ingredients" rows="9" placeholder="Ingredients" />
        </div>
        <div class="mb-3 py-3" style={styles.form}>
          <input type="text" class="form-control" id="video" placeholder="Video" />
          <div className='py-4 text-center'>
            <button style={styles.send}>Post</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RecipeAdd