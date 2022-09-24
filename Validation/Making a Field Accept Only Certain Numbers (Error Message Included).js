// This is a custom validation script
// Numbers that can be inputted
// TODO: Change all # characters to numbers you would like the field to accept, be it as a range using a dash or as a set of specific options using a comma
// Note 1: In the curly brackets is the number of digits the value will have, so it's very important to have this updated to match the maximum amount of digits out of the field's options!
// Note 2: For options with multiple digits, they will need to be wrapped in quotations then separated by a comma for the array []. 
var re = /([###]{#})/
// Validate field and execute error message
if ((re.test(event.value) == false)&&(event.value!=""))
   {
    app.alert
    ({cTitle: "Incorrect Value",cMsg: "Please enter ### only"});
     event.value="";
  }
