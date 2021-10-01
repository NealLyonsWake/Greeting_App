import React, {useEffect, useState}from "react";

function Greeting(){
    const [greeting, setGreeting] = useState([]);

    const greetingArray =["Hello", "Hi there", "Alright", "Good morning", "How's it going", "How are ya", "Good Evening", "Well 'ello mate", "Welcome", "Whatto", "Well Well Well", "Hello Hello Hello"]

    useEffect(()=>{
        newGreeting();
      },[])
      
      function newGreeting(){ 
          setGreeting(()=>{
              return greetingArray[ Math.floor(Math.random()*greetingArray.length)]
              })
      }


    return (
    <div>
    <h1>{greeting}</h1>
    <button onClick={newGreeting}>Click for new greeting</button>
    </div>
    )
}

export default Greeting;