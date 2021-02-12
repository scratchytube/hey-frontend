import React from 'react'
import './FavBioCard.css'

const FavBioCard = ({ bioSnippet }) => {
    // console.log(bioSnippet)
    return(
        <div className="fav__bio__card" >
            <h6>My Favorite bio</h6>
            <p>{bioSnippet.snippets}</p>
        </div>
    )
}

export default FavBioCard