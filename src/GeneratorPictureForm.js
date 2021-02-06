import React from 'react'
import './GeneratorPictureForm.css'

const GeneratorPictureForm = () => {
    return (
        <div className="picture__form" >
            <img src="https://lh3.googleusercontent.com/proxy/Y9uR_S3cSqi3ojBDAa1M1xxWyqFcSaBbi80V1QS-6899wScFuCB4scAFSTfHfIo7SOscBYaTJ-zMVWGeQ0earoFHR64JDjx7gBB8ew6LbTOqlOXLrEdb72ib" alt="form"/>
            <img src="https://thumbs.dreamstime.com/b/young-man-paris-standing-front-eiffel-tower-france-wearing-black-clothes-66514967.jpg" alt="form"/>
            <img src="https://www.traveller.com.au/content/dam/images/2/v/z/0/b/image.gallery.articleLeadwide.620x349.2vz0h.png/1382565715337.jpg" alt="form"/>
            <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/15/18/tiger-king.jpg" alt="form"/>
            <input name="image" placeholder="upload your face" />
            <button>Submit</button>
        </div>
    )
}

export default GeneratorPictureForm