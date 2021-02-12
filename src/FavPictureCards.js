import React from 'react'
import './FavPictureCards.css'

const FavPictureCards = ({ pictureData }) => {
    console.log(pictureData)

    return (

    <div className="fav_picture_cards" >
        <img style={{maxHeight: "40vh", maxWidth: "40vw"}} src={pictureData.completed_pictures} alt="lol" ></img>
    </div>
    
    )
}

export default FavPictureCards