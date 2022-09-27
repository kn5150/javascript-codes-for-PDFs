/* 
This is a custom calculation script
Add, subtract, multiply, or divide while hiding "0" from display"
*/

// Addition
// Get field values, as numbers
// TODO: Rename "Text1" and "Text2" to whichever fields you'd like to add
// Note: You may feel free to add more of these lines if you have more fields to add
var v1 = +getField("Text1").value;
var v2 = +getField("Text2").value;

// Perform the addition
// Note: If you have more fields to add, you'll need to add v3, v4, and so forth
var sum = v1 + v2;

// Set this field value
if (sum !== 0) {event.value = sum;

} else {

// Blank this field
event.value = "";

}


// Subtraction
// Get field values, as numbers
// TODO: Rename "Text1" and "Text2" to whichever fields you'd like to subtract
// Note: You may feel free to add more of these lines if you have more fields to subtract
// Note 2: The Order of Operations will apply here by going from left to right
var v1 = +getField("Text1").value;
var v2 = +getField("Text2").value;

// Perform the subtraction
// Note: If you have more fields to subtract, you'll need to add v3, v4, and so forth
var sum = v1 - v2;

// Set this field value
if (difference !== 0) {event.value = difference;

} else {

// Blank this field
event.value = "";

}


// Multiplication
// Get field values, as numbers
// TODO: Rename "Text1" and "Text2" to whichever fields you'd like to multiply
// Note: You may feel free to add more of these lines if you have more fields to multiply
var v1 = +getField("Text1").value;
var v2 = +getField("Text2").value;

// Perform the multiplication
// Note: If you have more fields to multiply, you'll need to add v3, v4, and so forth
var sum = v1 * v2;

// Set this field value
if (product !== 0) {event.value = product;

} else {

// Blank this field
event.value = "";

}


// Division
// Get field values, as numbers
// TODO: Rename "Text1" and "Text2" to whichever fields you'd like to divide
// Note: You may feel free to add more of these lines if you have more fields to divide
var v1 = +getField("Text1").value;
var v2 = +getField("Text2").value;

// Perform the division
// Note: If you have more fields to divide, you'll need to add v3, v4, and so forth
var sum = v1 / v2;

// Set this field value
if (quotient !== 0) {event.value = quotient;

} else {

// Blank this field
event.value = "";

}

