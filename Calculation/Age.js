// Set field to blank value as default
event.value = "";

// Convert field values to variables
var dob = this.getField("DOB").value; // Date of Birth
var abc = this.getField("ChangeText").value; // Variable and string can be renamed - this is only an example

if (dob != "") {
    //Commit date formats into new variables
    var birth = util.scand("mm/dd/yyyy", dob);
    var start = util.scand("mm/dd/yyyy", abc);

    // Create new variable "age"
    var age = start.getFullYear() - birth.getFullYear();

    // Calculate age
    if (start.getMonth() < birth.getMonth()) age = age - 1;
    if ((start.getMonth() < birth.getMonth()) && (start.getDate() < start.getDate())) age -= 1;
    event.value = age;
}
