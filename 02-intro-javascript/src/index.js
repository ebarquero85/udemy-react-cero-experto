
const apiKey = 'J3SWjyhj4sWgiQfeffpZY5yr8O6CoMU8';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( response => response.json() )
    .then( ({ data }) => {
        
        console.log(data);
        const { url } = data.user.avatar_url;
        
        console.log(url);
        const img = document.createElement('img');
        
        img.src = url;
        document.body.append( img );

    });
