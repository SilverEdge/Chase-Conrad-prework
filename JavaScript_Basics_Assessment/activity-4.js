// Start off by creating an array with three student names.

let studentNames = ["Chase","Lanyon","Austen"];

// Create a loop that will prompt the user for three more names.
// After every user input, store the new name into the array.

for(i=0;i<3;i++){
    studentNames.push(prompt("Please enter a student name."));
};

// Create a new loop that will iterate through the array and console log each element of the array.

for(i=0;i<studentNames.length;i++){
    console.log(studentNames[i]);
};