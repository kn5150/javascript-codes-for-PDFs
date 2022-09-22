var re = /(["EXEMPT"]{6})/
// Validate field and execute error message
if ((re.test(event.value) == false)&&(event.value!=""))
   {
    app.alert
    ({cTitle: "Incorrect Value",cMsg: "Please enter EXEMPT only"});
     event.value="";
  }
