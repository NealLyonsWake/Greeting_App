import React, {useEffect, useState}from "react";

function Greeting(){
    const [greeting, setGreeting] = useState([]);

    const greetingArray =["Hello", "Hi there", "Alright", "Bonjour", "Good morning", "How's it going", "How are ya", "Good Evening", "Well 'ello mate", "Welcome", "Whatto", "Good Afternoon", "Hello Hello Hello", "Well Well Well"]

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