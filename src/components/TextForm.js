import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
    
        let newText = text.toUpperCase();  
        setText(newText)
        props.showAlert("Converted to UpperCase!" , "success");
    }
    const handleToClear = ()=>{
    
        let newText = '';  
        setText(newText)
        props.showAlert("TextBox is Cleared!" , "success");

    }

    const handleDownClick = ()=>{
       
         let newText = text.toLowerCase();
         
         setText(newText)
         props.showAlert("Converted to LowerCase!" , "success");

     }
     const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Text is Pronounced Correctly" , "success");

    }

     const handleOnChange= (event)=>{ 
        setText(event.target.value);
         }

    const [text,setText]= useState('');
     
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#09091c'}} >
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control p-3 bg-opacity-50 bg-body text-${mode}" style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'#09091c' }} id="my-Box" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<div className="" >
<button className="btn btn-outline-secondary text-${mode}   bg-opacity-75 mx-2 " onClick={handleDownClick}>Convert to LowerCase</button>
<button className="btn btn-outline-secondary text-${mode}  bg-opacity-75 mx-2  " onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-outline-secondary text-${mode}  bg-opacity-75 mx-2" onClick={speak}>Spell</button>
<button className="btn btn-outline-secondary text-${mode}   bg-opacity-75 mx-2 " onClick={handleToClear}>Clear</button>
</div>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#09091c'}}>
  <h2>Your text Summary</h2>
    <p>{text.split(" ").length} words, {text.length} characters</p>
    <p>{0.08 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
      
</div>
  </>
  )
}
