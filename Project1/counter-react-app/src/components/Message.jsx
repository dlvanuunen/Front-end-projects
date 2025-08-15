import { useState } from 'react';


function Message(){

    let [inputMessage, setInputMessage]= useState('Type your message');

    const handleOnChange = () =>  {
        console.log("Text changed")
          setInputMessage(event.target.value);
    }
  

    return(
        
        <>
        <input onChange={handleOnChange} id='input-message'></input>
        <label htmlFor='input-message' >{inputMessage}</label>  
        
   
   </>

    )

}

export default Message
