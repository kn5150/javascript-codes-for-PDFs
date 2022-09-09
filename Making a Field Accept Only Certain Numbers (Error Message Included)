// This is a custom validation script
// Numbers that can be inputted
// TODO: Change all # characters to numbers you would like the field to accept, be it as a range using a dash or as a set of specific options using a comma
// Note 1: In the curly brackets is the number of digits the value will have, so it's very important to have this updated to match the maximum amount of digits out of the field's options!
// Note 2: This isn't completely error-proof. If there are options with multiple digits, the field can accept numbers that are improperly ordered, as long as the included integers in the options are used.
var re = /([###]{#})/
// Validate field and execute error message
if ((re.test(event.value) == false)&&(event.value!=""))
   {
    app.alert
    ({cTitle: "Incorrect Value",cMsg: "Please enter ### only"});
     event.value="";
  }
