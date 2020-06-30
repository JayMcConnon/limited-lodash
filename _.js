/*
*This is meant to be a limited re-creation of some lodash functions.
*/

const _ = {
  clamp(number, lower, upper){
    const lowerClampedNumber = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedNumber, upper);
    return clampedValue;
  },
  //start inRange function
  inRange(number, start, end) {
    //check if no end given
    if (!end){
      end = start;
      start = 0;
    }
    if (start > end){
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  },
    //start string split
  words(string){
    return string.split(' ');
  },
  //start padding function
  pad(string, length){
    if (string.length >= length){
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString =' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key){
    return !!object[key];
    //This checks if there is an object at the key specified in array
    //I first started with this.
    /*
    const hasValue = object[key] !== undefined;
    return hasValue;
     */
    // Then i changed to this
    // return object[key] ? true : false;
  },
  // gets an inverted object
  invert(object){
    let invertedObject = {};
    for (let key in object){
      const originalValue = object[key];
      invertedObject = { originalValue: key}
    }
    return invertedObject;
  },
  findKey(object, predicate){
    for (let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return key;
      }
    }
    undefined
    return undefined;
  },
  //drop a certain amount of elements from the start of array
  drop(arr, amount){
    if (!amount){
      amount = 1;
    }
    return arr.slice(amount);
  },
  dropWhile(array, predicate){
    const cb = (element, index) => {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  //starting chunk method (breaks arrays into specified parts
  chunk(array, size= 1){
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size){
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};


// Do not write or modify code below this line.
module.exports = _;
