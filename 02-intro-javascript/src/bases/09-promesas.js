import heroes from './data/heroes';
import { getHeroeById } from './bases/08-import-export';

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // Tarea

//         const heroe = getHeroeById(2);

//         console.log(heroe);
        
//         resolve(heroe);

//     }, 2000);

// });

// promesa.then((heroe) => {
//     console.log('Then de la promesa cumplida')
//     console.log(heroe)
// });

const getHeroeByIdAsync = ( id ) => {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
        
            const heroe = getHeroeById(id);

            heroe
            ? resolve(heroe)
            : reject('No se encontro el heroe');
    
        }, 2000);
    
    });

};

getHeroeByIdAsync(6)
    .then( heroe => console.log(heroe))
    .catch( err => console.log(err) );





