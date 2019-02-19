//help the cashier return the right of change


//Programme input: 

document.getElementById("okbutton").addEventListener("click", function () {
    clear_div();

    let amount_due = document.getElementById("amount").value;
    let amount_paid = document.getElementById("paid").value;
    let change_amount = (amount_paid - amount_due);
    document.getElementById('notes').innerHTML = `<h2>Amount Owed: $${amount_due} Amount Paid: $${amount_paid}</h2>`;
    calculate(parseFloat(change_amount));
   
});

function clear_div() {
    document.getElementById('notes').innerHTML = "";
}

function calculate(change_amount) {
    let banknotes = {
        '$100 bill': 0,
        '$50 bill': 0,
        '$20 bill': 0,
        '$10 bill': 0,
        '$5 bill': 0,
        "$1 bill": 0,
        "quarter": 0,
        "dime": 0,
        'nickel': 0,
        "penny": 0
    }

    const originalChange = change_amount;

    while ((change_amount - 100) >= 0) {
        change_amount = change_amount - 100;
        banknotes['$100 bill'] += 1;
    }
    while ((change_amount - 50) >= 0) {
        change_amount = change_amount - 50;
        banknotes['$50 bill'] += 1;
    }
    while ((change_amount - 20) >= 0) {
        change_amount = change_amount - 20;
        banknotes['$20 bill'] += 1;
    }
    while ((change_amount - 10) >= 0) {
        change_amount = change_amount - 10;
        banknotes['$10 bill'] += 1;
    }
    while ((change_amount - 5) >= 0) {
        change_amount = change_amount - 5;
        banknotes['$5 bill'] += 1;
    }
    while ((change_amount - 1) >= 0) {
        change_amount = change_amount - 1;
        banknotes['$1 bill'] += 1;
    }
    while ((change_amount - .25) >= 0) {
        change_amount = change_amount - .25;
        banknotes['quarter'] += 1;
    }
    while ((change_amount - .10) >= 0) {
        change_amount = change_amount - .10;
        banknotes['dime'] += 1;
    }
    while ((change_amount - .05) >= 0) {
        change_amount = change_amount - .05;
        banknotes['nickel'] += 1;
    }
    while ((change_amount - .01) >= 0) {
        change_amount = change_amount - .01;
        banknotes['penny'] += 1;
    }
    var output = '';
    for (var property in banknotes) {
        output += property + ': ' + banknotes[property] + '; ';
    }

    document.getElementById("notes").innerHTML = `<h1 id="change">$${originalChange.toFixed(2)}</h1>`;
    
    // display change breakdown on page
    let c = document.createDocumentFragment();
    for (const key in banknotes) {
        let e = document.createElement("h2");
        e.innerHTML = `${key}   :   ${banknotes[key]}`;
        c.appendChild(e);
    }
    document.getElementById('notes').appendChild(c);
}