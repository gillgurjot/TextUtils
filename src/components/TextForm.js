import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to Upper Case!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to Lower Case!", "success");
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text cleared!", "success");
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");

  return (
    <>
    <div className="container my-3" style={{color: props.mode === "dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode === "light"?"white":"black", color: props.mode === "dark"?"white":"black"}} value={text} rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UPPER CASE</button>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to lower case</button>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === "dark"?"white":"black"}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>It will almost take {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read.</p>
    </div>
    </>
  )
}