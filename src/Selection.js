import React, { useState } from "react";
import './Selection.css';
import image6 from "./assets/image.png"
import image1 from "./assets/image1.png"
import image2 from "./assets/image2.png"
import image3 from "./assets/image3.png"
import image4 from "./assets/image4.png"

const Selection=()=>{
    const [selectedAns, setSelectedAns]=useState(-1);
    const correctAns=1;

    return (
        <div className="parent">
            <div className="subPar">
                <div>Q - Select the correct picture for :</div>
                <div>
                    <img src={image6} alt="image6" height={50}  weight={50}/>
                </div>
                <div className="options">
                    <div className={selectedAns===0 ? "option border" : "option"} onClick={()=>setSelectedAns(0)}><img className="image" src={image4} alt="img" /><input checked={selectedAns===0} name="option" type="radio" /></div>
                    <div className={selectedAns===1 ? "option border" : "option"} onClick={()=>setSelectedAns(1)}><img className="image" src={image3} alt="img" /><input checked={selectedAns===1} name="option" type="radio" /></div>
                    <div className={selectedAns===2 ? "option border" : "option"} onClick={()=>setSelectedAns(2)}><img className="image" src={image2} alt="img" /><input checked={selectedAns===2} name="option" type="radio" /></div>
                    <div className={selectedAns===3 ? "option border" : "option"} onClick={()=>setSelectedAns(3)}><img className="image" src={image1} alt="img" /><input checked={selectedAns===3} name="option" type="radio" /></div>
                </div>
                <div className="input">
                    <div className="button" onClick={()=>setSelectedAns(-1)}>Reset</div>
                    <div className="button" onClick={()=>{
                        if(selectedAns===-1) alert('Please select the answer')
                        else if(selectedAns===correctAns) alert('Correct Answer! Proceed to next.');
                        else alert('Wrong Answer! Try again')
                    }}>Check Ans</div>
                </div>
            </div>
        </div>
    );
}

export default Selection;