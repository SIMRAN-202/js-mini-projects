// Get DOM elements



console.log('Script loaded!');
const cipherSelect = document.getElementById('cipher');
const shiftContainer = document.getElementById('shift-container');
const shiftInput = document.getElementById('shift');
const messageInput = document.getElementById('message');
const outputArea = document.getElementById('output');
const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const copyBtn = document.getElementById('copyBtn');

// Show/hide Caesar shift input
cipherSelect.addEventListener('change', () => {
  shiftContainer.style.display = cipherSelect.value === 'caesar' ? 'block' : 'none';
});

// Caesar Cipher
function caesarCipher(text, shift, encode = true) {
  return text.split('').map(char => {
    let base = char >= 'a' && char <= 'z' ? 97 :
               char >= 'A' && char <= 'Z' ? 65 : null;

    if (!base) return char;

    const charCode = char.charCodeAt(0) - base;
    const offset = encode ? shift : (26 - shift);
    return String.fromCharCode((charCode + offset) % 26 + base);
  }).join('');
}

// ROT13 Cipher (fixed Caesar with shift = 13)
function rot13Cipher(text) {
  return caesarCipher(text, 13, true); // Encode and decode are same
}

// Atbash Cipher
function atbashCipher(text) {
  return text.split('').map(char => {
    if (char >= 'a' && char <= 'z') {
      return String.fromCharCode(122 - (char.charCodeAt(0) - 97));
    } else if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(90 - (char.charCodeAt(0) - 65));
    } else {
      return char;
    }
  }).join('');
}

// Main handler
function processMessage(isEncoding = true) {
  const text = messageInput.value;
  const cipher = cipherSelect.value;
  let result = '';

  switch (cipher) {
    case 'caesar':
      const shift = parseInt(shiftInput.value) || 0;
      result = caesarCipher(text, shift, isEncoding);
      break;
    case 'rot13':
      result = rot13Cipher(text);
      break;
    case 'atbash':
      result = atbashCipher(text);
      break;
  }

  outputArea.value = result;
}

// Copy output to clipboard
copyBtn.addEventListener('click', () => {
  outputArea.select();
  document.execCommand('copy');
  copyBtn.textContent = 'Copied!';
  setTimeout(() => (copyBtn.textContent = 'Copy'), 1500);
});

// Event listeners
encodeBtn.addEventListener('click', () => processMessage(true));
decodeBtn.addEventListener('click', () => processMessage(false));

// Initial setup
shiftContainer.style.display = 'block'; // Caesar is default
