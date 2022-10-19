// Concatenate First Name and Last Name fields
event.value = this.getField("First Name").valueAsString + " " + this.getField("Last Name").valueAsString;

// Concatenate address components
if (this.getField("Residence Address").valueAsString != "") {
    event.value = 
        this.getField("Residence Address").valueAsString + " " + 
        this.getField("Residence City").valueAsString + ", " + 
        this.getField("Residence State").valueAsString + " " + 
        this.getField("Residence Zip").valueAsString;
}

else {
    event.value = "";
}
