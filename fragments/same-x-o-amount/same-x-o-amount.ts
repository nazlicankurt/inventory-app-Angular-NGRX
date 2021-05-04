const sameXOAmount = (str) => {
  const stringToCompare = str.toLowerCase();
  const numberOfX = stringToCompare.match(new RegExp('x', 'g')) || 0;
  const numberOfO = stringToCompare.match(new RegExp('o', 'g')) || 0 ;

  return numberOfX.length === numberOfO.length;
};
