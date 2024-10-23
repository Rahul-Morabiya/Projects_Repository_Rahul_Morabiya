// Data structure to hold stock information for each system
let stockData = {
    lifo: {
        purchases: [],
        transactions: [],
        balance: []
    },
    fifo: {
        purchases: [],
        transactions: [],
        balance: []
    },
    average: {
        purchases: [],
        transactions: [],
        balance: []
    }
};

// Toggle display of forms
function toggleForm(formId) {
    let form = document.getElementById(formId);
    form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
}

// Show only the selected system (LIFO, FIFO, Average) and hide others
function showSystem(system) {
    let systems = ['lifo', 'fifo', 'average'];
    systems.forEach(s => {
        document.getElementById(s).style.display = (s === system) ? 'block' : 'none';
    });
    updateBalanceDisplay(system);
    updateTransactionDisplay(system);
}

// Add purchase to the stock system (LIFO, FIFO, Average)
function addPurchase(system) {
    const date = document.getElementById(system + 'Date').value;
    const quantity = parseInt(document.getElementById(system + 'Quantity').value);
    const cost = parseFloat(document.getElementById(system + 'Cost').value);

    if (isNaN(quantity) || isNaN(cost) || !date) {
        alert("Please enter valid purchase details.");
        return;
    }

    const purchase = { date, quantity, cost };
    stockData[system].purchases.push(purchase);

    // Update balance
    stockData[system].balance.push({ quantity, cost });

    // Record transaction
    stockData[system].transactions.push({
        type: "Purchase",
        date,
        quantity,
        cost,
        total: quantity * cost
    });

    updateBalanceDisplay(system);
    updateTransactionDisplay(system);

    alert("Purchase added successfully!");
}

// Issue stock from the stock system (LIFO, FIFO, Average)
function issueStock(system) {
    const quantityToIssue = parseInt(document.getElementById(system + 'IssueQuantity').value);

    if (isNaN(quantityToIssue) || quantityToIssue <= 0) {
        alert("Please enter a valid quantity to issue.");
        return;
    }

    let remainingQuantity = quantityToIssue;
    const issuedStocks = [];

    // Issue based on the system (LIFO, FIFO, Average)
    if (system === 'lifo') {
        stockData[system].balance.reverse(); // Reversing for LIFO (Last in, first out)
    }

    for (let i = 0; i < stockData[system].balance.length; i++) {
        let stock = stockData[system].balance[i];
        if (stock.quantity >= remainingQuantity) {
            stock.quantity -= remainingQuantity;
            issuedStocks.push({ quantity: remainingQuantity, cost: stock.cost });
            remainingQuantity = 0;
            break;
        } else {
            issuedStocks.push({ quantity: stock.quantity, cost: stock.cost });
            remainingQuantity -= stock.quantity;
            stock.quantity = 0;
        }
    }

    // Remove any stocks with quantity 0
    stockData[system].balance = stockData[system].balance.filter(stock => stock.quantity > 0);

    // Update the transaction history
    const totalIssued = issuedStocks.reduce((acc, stock) => acc + (stock.quantity * stock.cost), 0);
    stockData[system].transactions.push({
        type: "Issue",
        date: new Date().toLocaleDateString(),
        quantity: quantityToIssue,
        cost: totalIssued / quantityToIssue,
        total: totalIssued
    });

    updateBalanceDisplay(system);
    updateTransactionDisplay(system);

    alert("Stock issued successfully!");
}

// Return stock to the system
function returnStock(system) {
    const quantityToReturn = parseInt(document.getElementById(system + 'IssueQuantity').value);

    if (isNaN(quantityToReturn) || quantityToReturn <= 0) {
        alert("Please enter a valid quantity to return.");
        return;
    }

    let lastTransaction = stockData[system].transactions.filter(t => t.type === "Issue").pop();
    if (!lastTransaction || lastTransaction.quantity < quantityToReturn) {
        alert("You cannot return more stock than issued.");
        return;
    }

    // Return stock by adding it back to the balance
    const costPerUnit = lastTransaction.cost;
    stockData[system].balance.push({ quantity: quantityToReturn, cost: costPerUnit });

    // Record the return as a transaction
    stockData[system].transactions.push({
        type: "Return",
        date: new Date().toLocaleDateString(),
        quantity: quantityToReturn,
        cost: costPerUnit,
        total: quantityToReturn * costPerUnit
    });

    updateBalanceDisplay(system);
    updateTransactionDisplay(system);

    alert("Stock returned successfully!");
}

// Update the balance display for each system
function updateBalanceDisplay(system) {
    const balanceDiv = document.getElementById(system + 'Balance');
    const balance = stockData[system].balance;

    if (balance.length === 0) {
        balanceDiv.innerHTML = "<p>No stock available.</p>";
        return;
    }

    let balanceTable = `
        <table>
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Cost per Unit (Rs)</th>
                    <th>Total (Rs)</th>
                </tr>
            </thead>
            <tbody>
    `;
    balance.forEach(stock => {
        balanceTable += `
            <tr>
                <td>${stock.quantity}</td>
                <td>${stock.cost.toFixed(2)}</td>
                <td>${(stock.quantity * stock.cost).toFixed(2)}</td>
            </tr>
        `;
    });
    balanceTable += '</tbody></table>';
    balanceDiv.innerHTML = balanceTable;
}

// Update the transaction history display for each system
function updateTransactionDisplay(system) {
    const transactionDiv = document.getElementById(system + 'Transaction');
    const transactions = stockData[system].transactions;

    if (transactions.length === 0) {
        transactionDiv.innerHTML = "<p>No transactions available.</p>";
        return;
    }

    let transactionTable = `
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Quantity</th>
                    <th>Cost per Unit (Rs)</th>
                    <th>Total (Rs)</th>
                </tr>
            </thead>
            <tbody>
    `;
    transactions.forEach(transaction => {
        transactionTable += `
            <tr>
                <td>${transaction.date}</td>
                <td>${transaction.type}</td>
                <td>${transaction.quantity}</td>
                <td>${transaction.cost.toFixed(2)}</td>
                <td>${transaction.total.toFixed(2)}</td>
            </tr>
        `;
    });
    transactionTable += '</tbody></table>';
    transactionDiv.innerHTML = transactionTable;
}
