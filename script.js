// function showLoginPrompt() {
//      let accountNumber = prompt("Enter Account Number (Hint: 123456)");
//      if (accountNumber) {
//       let pin = prompt("Enter PIN (Hint: 1234)");
//       if (accountNumber === "123456" && pin === "1234") {
//       alert("Login successful!");
//       } else {
//      alert("Invalid account number or PIN.");
//       }
//    }
// }


localStorage.setItems("Avlbal", (document.getElementById(Avlbal)) )

function showLoginPrompt() {
   var modal = document.getElementById('loginModal');
   modal.style.display = 'flex'; 
 }
 function handleLogin() {
   let accountNumber = document.getElementById("accountNumber").value;
   let pin = document.getElementById("exampleInputPassword1").value;
   if (accountNumber && pin) {
       if (accountNumber === "123456789" && pin === "1234") {
           alert("Login successful!");
           window.location.href = "./accountdetails.html"; 
       } else {
           alert("Invalid account number or PIN.");
       }
   } else {
       alert("Please enter both account number and PIN.");
   }
}

function debitWindowbtn() {
  var modal = document.getElementById('debitWindowModel');
  modal.style.display = 'flex';
}

function creditWindowbtn() {
  var modal = document.getElementById('creditWindowModel');
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById("debitWindowModel").style.display = "none";
  document.getElementById("creditWindowModel").style.display = "none";

}


function closeloginModal() {
  document.getElementById("loginModal").style.display = "none";
}





if (!localStorage.getItem('accountBalance')) {
  localStorage.setItem('accountBalance', '1000');  
}

function updateBalanceDisplay() {
  const balance = localStorage.getItem('accountBalance');
  document.getElementById('balance').innerText = `$${balance}`;
}

function creditAdd() {
  const creditAmount = parseFloat(document.getElementById('creditAmount').value);
  if (isNaN(creditAmount) || creditAmount <= 0) {
      alert("Please enter a valid amount to credit.");
      return;
  }
  let currentBalance = parseFloat(localStorage.getItem('accountBalance'));
  currentBalance += creditAmount;
  localStorage.setItem('accountBalance', currentBalance);
  updateBalanceDisplay();
  alert(`$${creditAmount} credited to your account.`);
}

function debitAdd() {
  const creditAmount = parseFloat(document.getElementById('creditAmount').value);
  if (isNaN(creditAmount) || creditAmount <= 0) {
      alert("Please enter a valid amount to debit.");
      return;
  }
  let currentBalance = parseFloat(localStorage.getItem('accountBalance'));
  if (currentBalance < creditAmount) {
      alert("Insufficient funds.");
      return;
  }
  currentBalance -= creditAmount;
  localStorage.setItem('accountBalance', currentBalance);
  updateBalanceDisplay();
  alert(`$${creditAmount} debited from your account.`);
}

updateBalanceDisplay();