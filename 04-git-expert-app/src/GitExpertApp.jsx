import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () => {
  
  const [categories, setCategories] = useState([]);

  const addCategories = (value) => {
  
    if(categories.includes(value)) return;
    
    setCategories( [...categories, value] ); //Operador spreed.
    //setCategories( cat => ['BARQUERO', ...cat]);

  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory 
        onNewCategory={ addCategories }
      />

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