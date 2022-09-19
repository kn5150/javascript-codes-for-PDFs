// This is a custom validation script
// Field only accepts certain letters
// TODO: Change "@@@" to the letters you want the field to accept
event.rc = /^[@@@]?$/.test(AFMergeChange(event));
