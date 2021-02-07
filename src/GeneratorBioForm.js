import React, { useState } from 'react'
import './GeneratorBioForm.css'

const GeneratorBioForm = () => {
    const [screenName, setScreenName] = useState("KingPapiChuLo12")
    const someScreenNames = [ "KingPapiChuLo12", "Tazaryoot", "QueenzGurl718", "Cleofus", "Mister Ding Dong Johnson", "MisterMan212", "allhailMike27"  ]

    const quickSubmit = () => {
        randomScreenNames()
    }

    
    const randomScreenNames = () => {
        const randomNumber = Math.floor(Math.random() * (someScreenNames.length))
        const misterRandomScreenName = someScreenNames[randomNumber]
        setScreenName(misterRandomScreenName)
    }

   



    return (
        <div className="generator__bio_form" >
            <form>
                    
                <h3>Sheesh this is a lot. Random plz</h3>
                <input type="button" value="Fill out the form randomly" className="button" onClick={quickSubmit} />
                <input type="button" value="Submit" className="button"  />
                        <br></br>
                        <br></br>
                <h3>What kind of bio would you like?</h3>
                <select name="kind">
                    <option>good funny</option>
                    <option>cheesy funny</option>
                    <option>bad funny</option>
                    <option>serious</option>
                    <option>super serious</option>
                    <option>poetic</option>
                    <option>self-depracating</option>
                </select>
                    <br></br>
                    <br></br>
                <h3>Who are you seeking?</h3>
                <select>
                    <option>men</option>
                    <option>women</option>
                    <option>anyone</option>
                </select>

                <h3>What was your first aol aim screenName</h3>
                <input type="text" value={screenName} ></input>
                <input type="button" value="suggest" className="button" onClick={randomScreenNames}  ></input>

                <br></br>
                <br></br>

                <input type="submit" name="submit" className="submit" />
            </form>
        </div>
    )
}

export default GeneratorBioForm 