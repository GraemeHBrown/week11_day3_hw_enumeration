const arrayTasks = {

	concat: function (arr1, arr2) {
    return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
    arr.splice(index,0,itemToAdd);
    return arr;
	},

	square: function (arr) {
    // const map = arr.map(x => x * x);
    const map = arr.map(x => Math.pow(x,2));
    return map;
	},

	sum: function (arr) {
    const result = arr.reduce((prev, curr) => prev + curr);
    return result;
	},

	removeAndClone: function (arr, valueToRemove) {
			 const withValsRemoved = arr.filter(item => item!=valueToRemove);
			 return withValsRemoved;
	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
