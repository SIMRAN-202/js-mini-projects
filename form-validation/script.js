document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const password = form.querySelector('#password');
    const confirmPassword = form.querySelector('#confirmPassword');

    clearStates(name);
    clearStates(email);
    clearStates(password);
    clearStates(confirmPassword);

    if (name.value.trim() === '') {
      showError(name, 'Full name is required.');
      isValid = false;
    } else {
      showSuccess(name);
    }

    if (email.value.trim() === '') {
      showError(email, 'Email is required.');
      isValid = false;
    } else if (!validateEmail(email.value)) {
      showError(email, 'Enter a valid email.');
      isValid = false;
    } else {
      showSuccess(email);
    }

    if (password.value.length < 6) {
      showError(password, 'Password must be at least 6 characters.');
      isValid = false;
    } else {
      showSuccess(password);
    }

    if (confirmPassword.value !== password.value || confirmPassword.value === '') {
      showError(confirmPassword, 'Passwords do not match.');
      isValid = false;
    } else {
      showSuccess(confirmPassword);
    }

    if (isValid) {
      alert('Registration successful!');
      form.reset();
      removeAllSuccess();
    }
  });

  function showError(input, message) {
    const group = input.parentElement;
    const errorDiv = group.querySelector('.error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    group.classList.add('error');
    group.classList.remove('success');
  }

  function showSuccess(input) {
    const group = input.parentElement;
    group.classList.remove('error');
    group.classList.add('success');
    const errorDiv = group.querySelector('.error-message');
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
  }

  function clearStates(input) {
    const group = input.parentElement;
    group.classList.remove('error', 'success');
    const errorDiv = group.querySelector('.error-message');
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
  }

  function removeAllSuccess() {
    document.querySelectorAll('.input-group').forEach(group => {
      group.classList.remove('success');
    });
  }

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
});
