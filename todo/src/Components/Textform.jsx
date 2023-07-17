import React, {useState} from 'react'

export default function Textform(props) {
  const [text,setText]=useState('Enter Text here');
  //console.log(text);
  const handleUpClick=()=>{
    //console.log('Uppercase');
    //setText('Clicked on uppercase')
    setText(text.toUpperCase());
  }
  const handleLowClick=()=>{
  setText(text.toLowerCase());
  }
  const handleOnChange=(e)=>{
    //console.log('On change');
    setText(e.target.value);
  }
  const handleClearClick=()=>{
    setText('');
  }
  const handleCopyClick=()=>{
    let selectedtext=document.getElementById('mybox');
    selectedtext.select();//will select text inside 'mybox'
    navigator.clipboard.writeText(selectedtext.value);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));

  }

  return (
    <>
    <div className="container">
    <div className="mb-3">
    <label htmlFor="mybox" className="form-label"><h1>{props.heading}</h1></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text to clipboard</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>





    </div>
    <div className="container my-3">
      <h1>Text Summary</h1>
      <p>{text.split(' ').length} Words , {text.length} Characters</p>
      <p>{0.008*text.split(' ').length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    
    </div>

    </>
  )
}
