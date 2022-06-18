import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([]);

  const addCategories = (value) => {
  
    if(categories.includes(value)) return;
    
    setCategories( [value, ...categories] ); //Operador spreed.
    //setCategories( cat => ['BARQUERO', ...cat]);

  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={ addCategories }/>

      {
        categories.map( category => (
          <GifGrid 
            key={ category } 
            category={ category } 
          />
        ))
      }
    </>
  );

};