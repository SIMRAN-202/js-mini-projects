const generate_btn = document.getElementById('generate-btn')
const quote = document.getElementById('quote')

const quotes = [
  "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
  "Code is like humor. When you have to explain it, it’s bad. — Cory House",
  "First, solve the problem. Then, write the code. — John Johnson",
  "Experience is the name everyone gives to their mistakes. — Oscar Wilde",
  "JavaScript is the duct tape of the Internet. — Charlie Campbell",
  "Make it work, make it right, make it fast. — Kent Beck",
  "Programs must be written for people to read. — Harold Abelson",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
  "The best error message is the one that never shows up. — Thomas Fuchs",
  "Code never lies, comments sometimes do. — Ron Jeffries",
  "Simplicity boils down to two steps: Identify the essential. Eliminate the rest. — Leo Babauta",
  "It’s not a bug – it’s an undocumented feature. — Anonymous",
  "Good code is its own best documentation. — Steve McConnell",
  "Debugging is like being the detective in a crime movie where you are also the murderer. — Filipe Fortes"
];

function generateQuote(){
const randomIndex = Math.floor(Math.random()* quotes.length)
quote.textContent = quotes[randomIndex]
}

generate_btn.addEventListener('click', generateQuote)
