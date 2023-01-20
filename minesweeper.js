function minesweeper(width, height, number) {
    let numberOfMines = number + 1;
    const result = [];
  
    for (let index = 0; index < height; index++) {
      const array = [];
      for (let index = 0; index < width; index++) {
        const square = getRandomInt(numberOfMines);
        
        if (square != 0) {
          numberOfMines--;
          array.push('bomb');
        } else {
          array.push(0);
        }
      }
      result.push(validateBombFieldsPerRow(array));
    }
  
    return validateBombFieldsPerColumn(result, width);
  }

function validateBombFieldsPerRow(array) {
    for (const index in array) {
        let number = 0;
        let nextValue = Number(index) + 1;
        if (array[index] === 'bomb') {
            continue;
        }

        if(array[index - 1] === 'bomb') {
            number = number + 1;
        }
        if(array[nextValue] === 'bomb') {
            number = number + 1;
        }
        array[index] = number;
    }

    return array;
}

function validateBombFieldsPerColumn(fullArray, maxWidth) {
    for (const array in fullArray) {
        let nextValue = Number(array) + 1;
        
        for(const value in fullArray[array]){
            if (fullArray[array][value] === 'bomb') {
                continue;
            }

            if (array != 0 && fullArray[array - 1][value] === 'bomb') {
                fullArray[array][value] = Number(fullArray[array][value]) + 1;
            }
            
            if (nextValue < maxWidth && fullArray[nextValue][value] === 'bomb') {
                fullArray[array][value] = Number(fullArray[array][value]) + 1;
            }
        }
    }
    return fullArray;
}
  
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const result = minesweeper(6, 6, 10);

console.log(result);