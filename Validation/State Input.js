// Convert input to uppercase
event.value = event.value.toUpperCase();

// Validates input against list of USPS abbreviations
if (event.value != "") {
    var r = new RegExp('^(AA|AE|AP|AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY)$');
    var result = r.test(event.value);
    if (result == false)  {
        app.alert("Invalid USPS State Abbreviation");
        event.rc = false;
    }
}
