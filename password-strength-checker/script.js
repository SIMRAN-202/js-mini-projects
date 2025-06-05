const passwordInput = document.getElementById('password');
const strengthMessage = document.getElementById('strengthMessage');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  let strength = getPasswordStrength(password);

  strengthMessage.textContent = `Strength: ${strength.label}`;
  strengthMessage.style.color = strength.color;
});

// Strength checker function
function getPasswordStrength(password) {
  let strength = {
    label: 'Weak',
    color: '#a94442' // Red
  };

  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  const isLong = password.length >= 8;

  if (password.length === 0) {
    return { label: 'Password strength will appear here', color: '#5e4630' };
  }

  if (isLong && hasUpperCase && hasNumbers && hasSpecialChar) {
    strength = {
      label: 'Strong',
      color: 'green'
    };
  } else if (password.length >= 6 && (hasUpperCase || hasNumbers || hasSpecialChar)) {
    strength = {
      label: 'Medium',
      color: 'orange'
    };
  }

  return strength;
}
