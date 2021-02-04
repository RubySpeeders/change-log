function findAnagram(stringOne, stringTwo) {
  const arrayOne = stringOne.split('');
  const arrayTwo = stringTwo.split('');

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayTwo.includes(arrayOne[i])) {
        arrayTwo.splice();
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(findAnagram('racecat', 'banana'));
