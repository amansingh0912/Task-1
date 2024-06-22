import React, { useState } from "react";
import './Selection.css';

const Selection=()=>{
    const [selectedAns, setSelectedAns]=useState(-1);
    const correctAns=0;

    return (
        <div className="parent">
            <div className="subPar">
                <div>Q - Select the correct picture for :</div>
                <div className="options">
                    <div className={selectedAns===0 ? "option border" : "option"} onClick={()=>setSelectedAns(0)}><img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcxbT2jVkhxdUFmQK-D15oZS9pQquZhNeuA&s" alt="img" /><input checked={selectedAns===0} name="option" type="radio" /></div>
                    <div className={selectedAns===1 ? "option border" : "option"} onClick={()=>setSelectedAns(1)}><img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bnyDtRVSels-BlqJcJPf2RfLBs6Orb66YA&s" alt="img" /><input checked={selectedAns===1} name="option" type="radio" /></div>
                    <div className={selectedAns===2 ? "option border" : "option"} onClick={()=>setSelectedAns(2)}><img className="image" src="https://i.pinimg.com/originals/e3/02/c7/e302c7735be9b05571fd1df1868464b4.jpg" alt="img" /><input checked={selectedAns===2} name="option" type="radio" /></div>
                    <div className={selectedAns===3 ? "option border" : "option"} onClick={()=>setSelectedAns(3)}><img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rI4nlN6h40-2DmUeNK-KxUjGz8fIM7Xbzg&s" alt="img" /><input checked={selectedAns===3} name="option" type="radio" /></div>
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