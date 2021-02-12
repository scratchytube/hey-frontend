import React from 'react'
import FavBioCard from './FavBioCard'
import './FavBioContainer.css'

const FavoriteBiosContainer = ({ profileData }) => {

    const misterProfile = profileData.map((profileBio) => (
        <FavBioCard key={profileBio.typeOfPrompt} bioSnippet={profileBio.bio} />
    ))
   
    return (
        <div className="favorite_bio_container" >

            {misterProfile}
        </div>
    )
}

export default FavoriteBiosContainer