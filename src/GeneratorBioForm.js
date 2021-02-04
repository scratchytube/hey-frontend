import React from 'react'
import './GeneratorBioForm.css'

const GeneratorBioForm = () => {
    return (
        <div className="generator__bio_form" >
            <form>
                    
                <h3>Sheesh this is a lot. Random plz</h3>
                <input type="button" value="Fill out the form randomly" className="button" />
                <input type="button" value="Submit" className="button" />
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
                <input type="text" ></input>
                <input type="button" value="suggest" className="button" ></input>

                <input type="submit" name="submit" className="submit" />
            </form>
        </div>
    )
}

export default GeneratorBioForm 