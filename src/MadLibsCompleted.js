import React from 'react'

const MadLibsCompleted = ({ noun, week }) => {
    return (
        <div className="completed_madlibs">
            <p>{noun} was what they called me in high school</p>
            <p>Yes my day is going {week}</p>
            <p>Yes my week has been {week}</p>
            <p>Yes my weekend should be {week}</p>
            <button>Add to Favorites</button>
        </div>
    )
}

export default MadLibsCompleted