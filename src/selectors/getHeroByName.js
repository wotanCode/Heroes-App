import { heroes } from '../data/heroes';

export const getHeroByName = (name = '') => {

  // name = name.toLowerCase();
  // return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

  return [...heroes];


}