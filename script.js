document.getElementById('registrationForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault(); 

  // input values 
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Clear any previous error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(msg) {
    msg.textContent = '';
  });

  // Validate form fields
  let isValid = true;

  if (password !== confirmPassword) {
    document.querySelector('#confirmPassword + .error-message').textContent = 'Passwords do not match';
    isValid = false;
  }

  if (isValid) {
    alert('Registration successful!');
  }
});
