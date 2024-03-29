import React from 'react';
import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Put your API key here
builder.init('50299bb3800f40f39273cec51eb82ff3')

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
 const Builder = () => {
    const location = useLocation()
  const [builderContentJson, setBuilderContentJson] = useState(null)
  useEffect(() => {
    builder.get('page', { url: location.pathname })
      .promise().then(setBuilderContentJson)
  }, [location.pathname])
  return  (<React.Fragment>
 <BuilderComponent model='page' content={builderContentJson}/>
 </React.Fragment>)
}
export default Builder;
