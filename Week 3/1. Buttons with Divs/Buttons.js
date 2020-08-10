/*function doChange() 
{
    alert("Button was clicked...!");
}*/
function confirmMe() {
	var choice = confirm("Press a button!");
	if (choice == 1) {
		alert("You pressed OK!");
	} else {
		alert("Are you sure you want to cancel?");
	}
}
