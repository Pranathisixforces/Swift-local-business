import React, { useState, useEffect } from "react";

const TextLoop = ({ texts, interval }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTextIndex, interval, texts.length]);

  return <p>{texts[currentTextIndex]}</p>;
};

export default TextLoop;