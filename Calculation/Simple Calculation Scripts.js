// These are all custom calculation scripts
// Note 1: These also work with constants (just remove the code for the second field)
// Note 2: Although there's a native way to add or multiply in Adobe Acrobat, sometimes, we'll need to use this structuring in case we'll need to add or multiply with a constant.

// Calculate the difference
// TODO: Change "Text1" and "Text2" to whichever fields need to be calculated
event.value = this.getField("Text1").value - this.getField("Text2").value;

// Calculate the quotient
// TODO: Change "Text1" and "Text2" to whichever fields need to be calculated
event.value = this.getField("Text1").value / this.getField("Text2").value;
