<script>
    function validateForm(event) {
      event.preventDefault();
      var username = document.getElementById('username').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var confirmPassword = document.getElementById('confirmPassword').value;
      var errorMessage = document.getElementById('errorMessage');

      if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
      } else {
        // Perform additional validation or submit the form
        errorMessage.textContent = '';

        // For demonstration purposes, you can add logic to submit the form data to the server here
        // For example: document.getElementById('signupForm').submit();
      }
    }
  </script>