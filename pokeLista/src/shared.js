export const setTypeClass = (type) => {
  switch (type) {
    case 'normal':
    case 'fighting':
    case 'flying':
    case 'poison':
    case 'ground':
    case 'rock':
    case 'bug':
    case 'ghost':
    case 'steel':
    case 'fire':
    case 'water':
    case 'grass':
    case 'electric':
    case 'psychic':
    case 'ice':
    case 'dragon':
    case 'dark':
    case 'fairy':
      return `${type}-type`;
    default:
      return 'default-type';
  }
};

