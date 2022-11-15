// This is a "Mouse Up" action for checkboxes
// TODO: Rename "Text1" and "Text2" to whatever checkboxes you want to disable
// Note: You can add more lines of the same code for more checkboxes
// Note 2: This should also be repeated vice versa for the checkbox in question as there would be a loophole involved without this step
// set read-only property based on the value of this field compared to "Off";
this.getField("Text1").readonly = (event.target.value != "Off");
this.getField("Text2").readonly = (event.target.value != "Off");
