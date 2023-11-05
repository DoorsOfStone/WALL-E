import React, { useEffect, useState } from "react";
import "../App.css";

function Qoutes() {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function getQuote() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
    }
    const interval = setInterval(() => {
      setIndex((index + 1) % quotes.length);
      getQuote();
    }, 500);
    return () => clearInterval(interval);
  }, [index, quotes]);

  return (
    <div className="carousel">
      {quotes.map((quote) => (
        <div className="quote flex flex-col">
          <span key={quote.id}>
            <p className="text text-black">{quote[index]?.text}</p>
            <p className="author">{quote[index]?.author}</p>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Qoutes;
