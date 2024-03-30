function getFormvalue() {
    // Get the form element
    var form = document.getElementById('form1');
    
    // Get the value of the first name input field
    var firstName = form.elements['fname'].value.trim();
    
    // Get the value of the last name input field
    var lastName = form.elements['lname'].value.trim();
    
    // Concatenate first and last name
    var fullName = firstName + ' ' + lastName;
    
    // Display the full name using alert
    alert(fullName);
    
    // Prevent form submission
    return false;
}
