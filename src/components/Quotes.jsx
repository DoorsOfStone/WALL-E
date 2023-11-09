import React, { useEffect, useState } from "react";
import "../App.css";

function Quotes() {
  let [quotes, setQuotes] = useState([]);
  let [index, setIndex] = useState(0);
  let [state, setState] = useState(false);

  useEffect(() => {
    async function getQuote() {
      let response = await fetch("https://type.fit/api/quotes");
      let data = await response.json();
      setQuotes(data);
    }
    getQuote();
  }, []);
  useEffect(() => {
    let interval = setInterval(() => {
      if (index > quotes.length - 1) {
        index = -1;
      }
      if (index.current !== index) {
        setState(true);
      }
      setIndex((index += 1));
      setState(true);
      console.log(quotes[index]);
      // let stateInterval = setInterval(() => {
      //   setState(false);
      // }, 19000);
      // return () => {
      //   clearInterval(stateInterval);
      //   setState(true);
      // };
    }, 21000);
    return () => clearInterval(interval);
  }, [index, quotes]);

  return (
    <div className="carousel">
      <div className="quote flex-col">
        <div>
          <span key={quotes[index]?.id}> </span>
          <p className={state ? "fade-in-text text" : "text animated fadeOut"}>
            {quotes[index]?.text}
          </p>
          <p
            className={
              state === true ? "fade-in-text text" : "author animated fadeOut"
            }
          >
            - {quotes[index]?.author}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
