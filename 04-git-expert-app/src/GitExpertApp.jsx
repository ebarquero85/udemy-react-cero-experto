import { useState } from "react";

export const GitExpertApp = () => {
  
  const [categories, setCategories] = useState(['Edgard', 'Uriel']);

  const addCategory = () => {
    
    //setCategories([...categories,'BARQUERO']); //Operador spreed.
    setCategories( cat => ['BARQUERO', ...cat]);


  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <button onClick={ addCategory }>Agregar</button>
      <ol>
        {
          categories.map(category => {
            return <li key={ category }> { category } </li>
          })
        }
      </ol>

    </>
  );

};
