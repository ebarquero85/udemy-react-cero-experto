import React from 'react'

export const GifGrid = ({ category }) => {

	const getGift = async () => {
		
		const url = `https://api.giphy.com/v1/gifs/search?limit=10&api_key=J3SWjyhj4sWgiQfeffpZY5yr8O6CoMU8&q=programming`;
		const resp = await fetch(url);
		const { data } = await resp.json();
		
		console.log(data);

	}

	getGift();


  return (
    <>
        <h3>GifGrid</h3>
    </>
  )
}
