import React, { useState } from 'react'
import MadLibsCompleted from './MadLibsCompleted'

const MadLibs = () => {
    const [showForm, setShowForm] = useState(false)
    const [noun, setNoun] = useState("")
    const [weekendGoing, setWeekendGoing] = useState("")
    

    const handleSubmit = e => {
        e.preventDefault()
        setShowForm(true)
    }

    return (
        <div className="Madlib_form" >
            <h2>Gimme some answers</h2>
            <form>
                <h3>What was you first AOL screenName?</h3>
                <input 
                className="madlib_input"
                type="text"
                name="noun"
                placeholder="noun plz"
                value={noun}
                onChange={(e) => setNoun(e.target.value)}
                />
                <h3>How is your week going?</h3>
                <input 
                className="madlib_inputer"
                type="text"
                name="word"
                value={weekendGoing}
                onChange={(e) => setWeekendGoing(e.target.value)}
                />
                
                <br></br>
                <br></br>

                <button onClick={handleSubmit} >Submit Me!</button>
            </form>
            {showForm && <MadLibsCompleted noun={noun} week={weekendGoing} /> }
        </div>
    )



}

export default MadLibs