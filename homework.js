// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.
//function remove(array, member)
        // TRIAL 1; XXXXXXlet p = ['Candence', 'Ordel', 'Marion']
        // if (idx=p.indexOf('Candace', 'Ordel', 'Marion')) {
        // }    p.splice(idx,1)
        //     even if 
    //TRIAL 2 XXXXXX
    //     function remove(array member) {
    //           let newArray = []; 
    //           console.log(newArray);
    //        for (let member of array) {
    //            if [name !== member]  {
    //           newArray.push(member);
    // } 
    // }     
    //         return newArray;
    // }TRIAL 3
        // function remove(array member) {
        //     newArray = [];
        //     for (name !== array) {
        //     }  return = remove 
        //     if (name == array) {
        //         newArray.push(name)
    //TRIAL 4
        // function remove(array, member) {
        //     let newArray = [];
        //     for (let name of array) {
        //    if (name !== member) {
        //             newArray.push(name);
        //         }
        //     }
        //     return newArray;
        // }
    //TRIAL 5 THIS IS IDENTICAL to T4; why is this one working?
    function remove(array, member) {
        let newArray = [];
        for (let name of array) {
        if (name !== member) {
            newArray.push(name);
        }
        }
        return newArray;
    }

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.
         //WHY NOT WORKING??

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
        //TRIAL 1
            // function sum(numarray) {
            //     let score = ;
            // }   let sum = 0
            //     for (let sum of numarray) {
            //         sum += score
            //     }
            // }  return score;
        //TRIAL 2
        //   arraysum = function(arr) {
        //       return arr.reduce(function(a,b) {
        //           return a+b
        //       } , 0);
        //   }
        //TRIAL 3
        //const arrSum = arr => arr.reduce((a,b)) => a+b,0)
        //TRIAL 4
        function sum(arrsum) {
            let total = 0;   //WHY ARE WE SETTING THE TOTAL NUMBER =0?? because that's the number we're starting w?
            for (let numb of arrsum) {
                total += numb ;  //WHY DOES THIS ORDER MATTER? AND WHAT DOES IT MEAN?
        }
            return total; 
        }
        // function sum(array) {
        //     let total = 0;
        //     for (let item of array) {
        //       total += item;
        //     }
        //     return total;
        //   }
        


// // 4. Create a function called "average" that takes an array of numbers
// // and returns the average of those numbers.
//     function average(numarray) {
//         let nums = 
//         let sum =
//     }  
        // function average(numarray) {

        // }
        //     .push(numarray)

        //ex arrSum = function(arr) {
        //     return arr.reduce(function(a,b) {
        //         return a+b
        //     }, 0);

        // function average(numarry) {
        //     let total = 0;  
        //     for (let numb of numarry) {
        //         total += numb ; 
        //         let avg = total/numb;
        // }       average.push(avg)
           
        function average(numarray) {   //<<<Not sure if this works yet; if it doesn't dunno why
            let total = sum(numarray);
            if (total === 0) return;
            return total / numarray.length;
        }
// // 5. Create a function called "minimum" that takes an array of numbers and
// // returns the smallest number in that array.
        function minimum(numarray) {
            let sum = 0
// //     }

// // 6. There are many techniques to sort arrays in programming. Your programming
// // language will likely include the ability to do this. We are going to
// // implement sorting ourselves, however.
// //
// // A "selection sort" is one of the most simple sorting algorithms. To implement it,
// // you start with an unsorted array of numbers. You search the array and find the
// // smallest number in the array. You then insert that into a new array as the first
// // element and remove it from the original array. You continue doing this until
// // there are no numbers left in the original array.
// //
// // Create a function called selectionSort that takes an array of numbers and returns
// // a sorted array using the above technique.
// //
// // Note 1: You do not actually want to delete things from the original array. You
// // should copy it first. To copy an array, use the following code:
// //
// // var arrayCopy = array.slice(0);
// //
// // Think about why this works.
// //
// // Note 2: Selection sort can be implemented using one array. Read the explanation at
// // https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// // to see how. This may make more sense to you.

// // 7. Create a function called `textList` that takes an array and joins its elements
// // into a string separated by commas.
// //
//     function textlist(array)
// // For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// // `"Cadence,Ordel,Marion"`.
