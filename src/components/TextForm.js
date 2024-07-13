import React, { useState } from 'react';

//  This is hook and was introduced when people started moving from class based components to functions based components, before we used to change a variable displayed using this.varname, but as we are using functions now, we use State hook to update variable in all places

export default function TextForm(props) {
  const handleUpClick = () => {
    let nameToUpper = text.toUpperCase();
    setText(nameToUpper);
  };
  const handleLowClick = () => {
    let nameToUpper = text.toLowerCase();
    setText(nameToUpper);
  };
  const handleCopyTextClick = () => {
   navigator.clipboard.writeText(text)
  
  };
  const handleRemoveSpaceClick = () => {
    let newText = text.replace(/\s+/g,' ').trim();
    setText(newText)
  
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearTextClick = () => {
    setText('');
  };

  const [text, setText] = useState('');
  const getTime = (text) =>{

    return text.split(' ').length*0.008
  }
  return (
    <>
      <div className="mb-3 container">
        <h1 className='mt-3'> {props.heading}</h1>
        <textarea
          className="form-control mb-3"
          id="exampleFormControlTextarea1"
          value={text}
          rows="8"
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveSpaceClick}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopyTextClick}>
          Copy to clipboard
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearTextClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p> You need {getTime(text)} mins to read these words</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
// Initially text cannot be edited in textarea
