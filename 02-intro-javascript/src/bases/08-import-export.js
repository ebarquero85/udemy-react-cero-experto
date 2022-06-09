//import { heroes } from './data/heroes';
import heroes, {owner} from '../data/heroes';

export const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id );
}

//console.log(getHeroeById(3));


const getHeroByFilter = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner );
}

//console.log(getHeroByFilter('DC'));

