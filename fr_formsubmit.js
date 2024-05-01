/*
	Author: Thomas Studer
	Student ID# 4316851
	WEB110-N801: Project Part 1
	Date:   4/28/24


   Filename: fr_formsubmit.js

   Purpose: The purpose of this program is to simply report on a
            successful completition of a valid Web form.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that
            you do not have to continually retype test values
            in the survey form.


*/

window.onload = function() {													/*Link to a JavaScript file and Send an alert using JavaScript*/
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
      return false;
   };
};