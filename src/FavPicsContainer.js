import React from 'react'
import FavPictureCards from './FavPictureCards'
import './FavPicsContainer.css'

const FavPicsContainer = ({profileData}) => {

    const misterPictures = profileData.map((profilePicture) => (
        <FavPictureCards pictureData={profilePicture.picture}/>
    ))
    
    return (
        <div className="fav__pics" >
            

            { misterPictures }
        </div>
        )
}

export default FavPicsContainer