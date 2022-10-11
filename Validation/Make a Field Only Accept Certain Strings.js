// This is a custom validation script
// TODO: Change "Text1" and "Text2 to the strings that should be accepted
// Note: This also works with integers
event.rc = true;
if (event.value != "" && event.value != "Text1" && event.value != "Text2")
{
    app.alert("The entered value needs to be either 'Text1' or 'Text2'!");
    event.rc = false;
}
