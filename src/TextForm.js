// import React from 'react'
import React, {useState} from 'react'


export default function TextForm(props) {

    const handleOnChange=(event)=>
    {
        console.log("I was clicked");
        setText(event.target.value);    
    }

    const handleOnClick=()=>
    {
        // setText("you have clicked this  portion")
        var str = text;
        var str1 = str.toUpperCase();
        // console.log("Upper case was clicked" + str1);
        setText(str1);   
    }

    const handleLoClick=()=>
    {
       
        // setText("you have clicked this  portion")
        var str = text;
       
        var str1 = str.toLowerCase();
        console.log("Upper case was clicked" + str1);
        setText(str1);   

    }

    const handleClearClick=()=>
    {
       setText('');
    }
    
   
    
  
    const [text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey'}} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary my-2 mx-2" onClick={handleOnClick}>Convert To Uppercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert To LowerCase </button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text </button>
            
        </div>
        <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
       <h2>Your Text summary</h2>
       <p>{text.split(" ").length} Words And {text.length} Characters</p> 
       <p>Average Reading Time {text.split(" ").length*(0.08)} Minutes</p>
       <h2>Preview</h2>
       <p>{text}</p>
        </div>
        </>
    )
}
