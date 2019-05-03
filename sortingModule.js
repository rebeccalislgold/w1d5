var numberList = [];


//REMOVED THIS FUNCTION, WROTE DIRECTLY IN MODULE.EXPORT BELOW:
// function storeNumber(num) {

//   numberList.push(num);
//   return numberList;

// }

function sortNumberList(noList) {

  return noList.sort(function(a,b) {

    return a - b;

  })

};

// sortNumberList(numberList);
// console.log(numberList);


module.exports = {

  storeMyNumbers: function(newNum) {

    numberList.push(newNum);

  },

  sortMyNumbers: function() {

    var sortedList = sortNumberList(numberList);
    return sortedList;

  }

}