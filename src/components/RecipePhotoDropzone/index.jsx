import React from 'react'
import { useDropzone } from 'react-dropzone'
import { HiOutlinePhotograph } from 'react-icons/hi'
import styles from '../../assets/styles/recipeAdd'

const RecipePhotoDropzone = ({open}) => {
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    isDragActive,
    acceptedFiles
  } = useDropzone({
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png']
    },
    maxFiles: 1,
    maxSize: 2 * 1024 * 1024
  })

  return (
    <>
      <div {...getRootProps({
        className: "recipe-photo-dropzone"
      })} style={styles.dropzone}>
        <input {...getInputProps()} />
        <HiOutlinePhotograph size={35} />
        {isDragAccept && (<p>Recipe photo will be accepted</p>)}
        {isDragReject && (<p>Recipe photo will be rejected</p>)}
        {!isDragActive && (<p>Add Photo</p>)}

        <ul style={{ listStyleType: 'none' }}>
          {
            acceptedFiles.map((file) => (
              <li key={file.path}>
                {file.path} - {file.size} bytes
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default RecipePhotoDropzone