// This is a custom validation script
// TODO: Change "@@@@@" to the word that should be accepted
// Note: In the array [], you may include more words if you like as long as they're separated by commas and there are quotations around each word
// TODO : Change # to the number of characters in the longest word
var re = /(["@@@@@"]{#})/
// Validate field and execute error message
if ((re.test(event.value) == false)&&(event.value!=""))
   {
    app.alert
    ({cTitle: "Incorrect Value",cMsg: "Please enter @@@@@ only"});
     event.value="";
  }
