import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageLoop = ({ texts, interval }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTextIndex, interval, texts.length]);

  return <Market src={texts[currentTextIndex]}/>;
};

export default ImageLoop;

const Market=styled.img`
width:100%;
display:flex;
  @media (min-width: 260px) and (max-width: 820px){
    display:none;
    }
`