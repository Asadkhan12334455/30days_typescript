// Using `let` for a variable that can be reassigned
var age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26
// Trying to reassign a `let`-declared variable
var name1 = "Alice";
try {
    name1 = "Bob"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.
