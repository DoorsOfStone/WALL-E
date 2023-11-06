import React, { useEffect, useState } from "react";
import "../App.css";

function Quotes() {
  let [quotes, setQuotes] = useState([]);
  let [index, setIndex] = useState(0);
  
  useEffect(() => {

    async function getQuote() {
      let response = await fetch("https://type.fit/api/quotes");
      let data = await response.json();
      setQuotes(data);
      
      
    }
    getQuote();
  },[]);
  useEffect(()=>{
    const interval = setInterval(() => {
      if(index > quotes.length -1){
        index = -1;
      }
      setIndex(index += 1);
       console.log(quotes[index])
     
    }, 20000);
    return () => clearInterval(interval);
  }, [index, quotes]);
 
    

  return (
    <div className="carousel">
     <div className="quote flex-col">        
            <span key={quotes[index]?.id}> </span>
            <p className="text text-3xl">{quotes[index]?.text}</p>
            <p className="author text-lg font-light">{quotes[index]?.author}</p>
      </div>
    </div>
  );
}

export default Quotes;
