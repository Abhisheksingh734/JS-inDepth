// const sentence = "There once was a monkey who knew Javascript..."
// //check for monkey and was words in the sentence
// const pattern = /monkey/;
// const exists= pattern.test(sentence);
// const match = sentence.match(pattern);

// console.log(exists);
// console.log(match);

 


/*
    1. Create a variable called "quote" that points at:
       "What is this? A center for ants?"

    2. Create a variable called "pattern" that points at
       a regular expression to search for "ant" in a string

    3. Use the .test method on the "pattern" in step
       2 to check if "quote" has the pattern in it

    4. Use the .match method on the "quote" string to return
       a match for the "pattern" regexp

    5. Print out the results from steps 3 and 4
*/



// const quote = "What is this? A center for ants?";

// const pattern = /ant/;

// const test = pattern.test(quote);
// const match = quote.match(pattern);

// console.log(test);
// console.log(match);





/*
    1. Create a variable called "email" that points at:
       "monkey@trees.com"

    2. Create a variable called "emailPattern" that is
       a regular expression that will look for a string
       that ENDS with ".com"

    3. Test "email" against "emailPattern" to see if
       it returns true/false using .test on "emailPattern"

    4. Find a match using .match on "email" with the
       "emailPattern regex"

    5. Print out the results from 3 and 4.

    BONUS: What is an issue with this pattern?
*/





// const email = "monkey@tree.com";
// const emailPtter = /\.com$/;

// const test1 = emailPtter.test(email);
// console.log(test1)
