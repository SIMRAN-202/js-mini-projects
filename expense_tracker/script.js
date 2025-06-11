const form = document.getElementById('expense-form');
    const nameInput = document.getElementById('name');
    const amountInput = document.getElementById('amount');
    const expenseList = document.getElementById('expense-list');
    const totalDisplay = document.getElementById('total');

    let total = 0;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = nameInput.value.trim();
      const amount = parseFloat(amountInput.value);

      if (name && amount && amount > 0) {
        // Create expense item
        const li = document.createElement('li');
        li.textContent = `${name}`;
        const amtSpan = document.createElement('span');
        amtSpan.textContent = `₹${amount}`;
        li.appendChild(amtSpan);
        expenseList.appendChild(li);

        // Update total
        total += amount;
        totalDisplay.textContent = `Total: ₹${total}`;

        // Clear inputs
        nameInput.value = '';
        amountInput.value = '';
      }
    });