import React,{useState} from 'react'

export default function TextForm(props) {   
    var [Text,setText]= useState('Enter Text Here2');
    const handleUPClick =()=>{
        console.log("Uppercase was clicked" + Text);
         let newText = Text.toUpperCase();
       setText(newText);
       props.showAlert("Converted To UpperCase","success");
    } 
    const handleonChange = (event)=>{
        console.log("Handle Event By ONchange");
        setText(event.target.value);
    }
   
    return (
        <>
        <div className='container'>
            <h1> {props.heading}</h1>
            <div className="mb-3">                     
                <textarea className="form-control" value={Text} onChange={handleonChange} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUPClick}>Convert Text into LowerCase</button>
        </div>
        <div className='container my-3'>
            <h1>Your Text summry</h1>
            <p>{Text.split(" ").length} Words {Text.length} Character</p>
        </div>
        </>
    )
}
