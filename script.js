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
   modal.style.display = 'flex';  // Display the modal when the Login button is clicked
 }
//  window.onclick = function(event) {
//    var modal = document.getElementById('loginModal');
//    if (event.target === modal) {
//      modal.style.display = 'none'; // Close modal when clicking outside of it
//    }
//  };
 
 function handleLogin() {
   // Get the values of the inputs
   let accountNumber = document.getElementById("accountNumber").value;
   let pin = document.getElementById("exampleInputPassword1").value;

   // Check if both the account number and pin are provided
   if (accountNumber && pin) {
       // Check if the account number and pin match the correct values
       if (accountNumber === "123456789" && pin === "1234") {
           alert("Login successful!");
           window.location.href = "subdir/AccountDetails.html"; 
       } else {
           // Show an alert if either the account number or pin is incorrect
           alert("Invalid account number or PIN.");
       }
   } else {
       // Show an alert if either field is empty
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
