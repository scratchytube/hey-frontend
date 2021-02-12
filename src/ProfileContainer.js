import React, { useState } from 'react'
import FavoriteBiosContainer from './FavoriteBiosContainer'
import FavPicsContainer from './FavPicsContainer'
import FavPictureCards from './FavPictureCards'
// import PreviewPicture from './PreviewPicture'
import './ProfileContainer.css'

const ProfileContainer = ({ profileData }) => {
    const [mainPic, setMainPic] = useState(profileData.picture)


const [renderFavBio, setRenderFavBio] = useState(false)
const [renderFavPicture, setRenderFavPicture] = useState(false)

    const handleFavBioRender = () => {
        setRenderFavBio((renderFavBio) => !renderFavBio)
    }

    const handleFavPicRender = () => {
        setRenderFavPicture((renderFavPicture) => !renderFavPicture)
    }

    console.log(profileData)

    // const favPictures = profileData.map((picture) => (
    //     <FavPicsContainer favoritePicsEver={picture.completed_pictures} />
    // ))
    
    
    return(
        <div className="profile__container" >
                <h4>My profile</h4>
            <section>
                <div>
                    <p>Main Picture</p>
                    <button onClick={handleFavPicRender} >Choose a Main Picture</button>
                    {renderFavPicture ? 
                        <FavPicsContainer profileData={profileData} /> : null
                    }
                </div>
                <div>
                    <p>Main BIO</p>
                    <button onClick={handleFavBioRender} >Choose a main Bio</button>
                    {renderFavBio ? 
                        <FavoriteBiosContainer profileData={profileData} /> : null
                    }
                </div>
                    
                    
               
                    
            </section>
        </div>
    )
}

export default ProfileContainer