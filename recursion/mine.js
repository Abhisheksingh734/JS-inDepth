// const mine = {
//     gold: 3,
//     left: {
//         gold: 2,
//         left:{
//             gold: 4,
//         },
//         right: {
//             gold:1,
//         },
//     },
//     right: {
//         gold: 5,
//         right: {
//             gold: 1,
//         },
//     }
// }

// const totalGold = (level)=>{
//     let total = level.gold;

//     if(level.left){
//          total += totalGold(level.left);
//     }

//     if(level.right){
//         total += totalGold(level.right);
//     }

//     return total;
// }

// const result = totalGold(mine);
// console.log(result);

// Exercise

/*
    1. Create a function called "fizzbuzz" that takes two
       number arguments: "startNum" and "endNum"
    2. The function will count from "startNum" to the "endNum"
       incrementing by 1 each time and do the following:
    3. If the number is:
       - Divisible by 3: Print "Fizz" followed by the number
       - Divisible by 5: Print "Buzz" followed by the number
       - Divisible by both 3 AND 5:
         - Print "FizzBuzz" followed by the number (no fizz or buzz)
       - In all other cases, just print the number itself
        
    3. You must solve this using recursion
    4. Test it with different start and end values

    HINT: What is the base-case vs the "regular" cases here?
*/

// const fizzbuzz = (startNum, endNum) => {
//   //base case
//   if (startNum === endNum) return ;

//   //regular case
//   if (startNum % 3 === 0 && startNum % 5 === 0)
//     console.log(`FizzBuzz ${startNum}`);
//   else if (startNum % 3 === 0) console.log(`Fizz ${startNum}`);
//   else if (startNum % 5 === 0) console.log(`Buzz ${startNum}`);

//   fizzbuzz(startNum + 1, endNum);
// };

// fizzbuzz(1, 20);

















/*
    1. Create a function called "palindrome" that will take
       a single String as an argument

    2. The function will return true if the String is a palindrome
       or false if it's not

    3. A String is a palindrome if it reads the same start-end
       as it does end-start

    4. Examples of palindromes:
       - racecar
       - level
       - mom
       - kayak

    5. Solve this using recursion instead of loops

    HINT: What are the base-cases? (I thought of 4)
*/



// const isPalindrome = (word)=>{
//    if(word[0] != word[word.length-1]){
//       return false
//    }
//    if(word.length<=1){
//       return true
//    }
//    return isPalindrome(word.substring(1,word.length-1));
// }

// console.log(isPalindrome("io"));





/*
    1. Create a function called "flatten" that will take
       a single Array as an argument

    2. The function will return a flattened version of the Array
       no matter the nested levels

    3. Solve this using recursion

    Examples:    
        console.log(flatten([1, 2, 3]));
        // [ 1, 2, 3 ]

        console.log(flatten([1, 2, 3, [1, 2, 3]]));
        // [ 1, 2, 3, 1, 2, 3 ]

        console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]));
        // [1, 4, 5, 6, 7,8, 9, 2, 3]

    HINT: Look up "how to check if something is an Array in js"
          on Google/MDN
    HINT2: What are the base-cases and what do we want to return?
*/


// const flatten = (arr)=>{
//    let result = [];

//    for(const item of arr){
//       if(Array.isArray(item)){
//          for(const innerItem of flatten(item)){
//             result.push(innerItem);
//          }
//       }else{
//          result.push(item);
//       }
//    }
//    return result; 
// }

// console.log(flatten([1,2,3,[1,2,3,[1,2]]]));

















/*
    1. Create a function called "flatten" that will take
       a single Object as an argument

    2. The function will return a flattened version of the Object
       no matter the nested levels (it will overwrite duplicate keys)

    3. Solve this using recursion

    Example:    
        
    console.log(
    flatten({
        id: 1,
        name: "bob",
        happy: true,
        friend: {
        id2: 2,
        name2: "alice",
        happy2: true,
        },
    })
    );

    // {
    //     id: 1,
    //     name: 'bob',
    //     happy: true,
    //     id2: 2,
    //     name2: 'alice',
    //     happy2: true
    // }

    HINT: Use the "typeof" operator to check if something
          is an Object (naiive check, no need to be 100%)
    HINT2: The "delete" operator will delete a key from an Object
*/



const flatten = (obj)=>{
   const result ={}
   if(obj.length===0){
      return result
   }
   for(const item of Object.entries(obj)){
      if(typeof(item)==="object"){
         const flattend = flatten(item);
         result = {...flattend}
      }else{
         result.item.key = item.key;
         delete item.key;
      };
   }

   return result;

}



console.log(
   flatten({
       id: 1,
       name: "bob",
       happy: true,
       friend: {
       id2: 2,
       name2: "alice",
       happy2: true,
       },
   })
   );


























