//Arrays Practice
const movies = ["Lilo and Stitch", "Hawaii 5-0", "Jurassic Park"];
//sore different types of elements
const elements = ["hello", 7, {message: "Hi mom"}, true];

console.log(movies.length);
console.log(movies[1]);
//********ITERATING OVER AN ARRAY *******/
for (i = 0; i < movies.length; i++){
    console.log(movies[i]);
}
//using the for-of method for the same thing 

let ofMovie;
for (ofMovie of movies){
    console.log(ofMovie);
}

movies.forEach(myElement => {console.log(`For Loops ${myElement}`); //anon function( assigning myElement to each array index and prints For loops %Index Value% until array ends)
});

//////***************ADDING TO AN ARRAY */
movies.push("Magnum PI");
console.log(movies); //if array is long we may console.log[movies.lenght - 1] to show the last element

//add to beggining of an array use unshift
movies.unshift("50 First Dates");// pushes this value as value 0 of movies array
console.log(movies[0]);

//remove from the end of the array
movies.pop();

//put it into a new variable
let theEndElement = movies.pop();

//splice (index to start, number of elements to remove)
movies.splice(1,2); //Arrayname.deletevalue(starting index, how many values to remove)