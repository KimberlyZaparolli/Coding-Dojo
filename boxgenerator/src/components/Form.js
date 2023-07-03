import React, {useState} from 'react'
import './ColorBox.css';


const Form = () => {
 const [colorBox, setColorBox] = useState([]);


const createBox = (color) => {
 setColorBox(prevColor => [...prevColor, color]);

}

const handleSubmit = (e) => {
    e.preventDefault();
    const color = e.target.color.value;
    createBox(color);
    e.target.reset();
}
        return (
   <div>
        <form onSubmit={ handleSubmit }>
           
            <label>Name</label>
            <input type="text" name="color" ></input>
            <button type="submit ">Add</button>
     </form>
     <div className="box-container">
        {colorBox.map((color, index) => (
<div key={index} className="box" style={{backgroundColor: color}}></div>
        ))}

     </div>
</div>



  )
}

export default Form