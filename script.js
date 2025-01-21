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
           window.location.href = "https://github.com/Shanmukhsrinadh/banking-dashboard/blob/main/accountdetails.html"; 
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
