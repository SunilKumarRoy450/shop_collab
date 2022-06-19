



document.querySelector("form").addEventListener("submit", formsubmit);
var userstack = JSON.parse(localStorage.getItem("userdatabase")) || [];
function formsubmit(event) {
  event.preventDefault();
  var card_number = document.querySelector(".card_number").value;
  var card_holder_name = document.querySelector(".card_holder_name").value;
  var expiry = document.querySelector(".expiry").value;
  var cvv = document.querySelector(".cvv").value;

  var userData = {
    cardnumber: card_number,
    cardname: card_holder_name,
    expirydate: expiry,
    cvvnumber: cvv,
  };
  userstack.push(userData);

  localStorage.setItem("userdatabase", JSON.stringify(userstack));
}

function gototp() {
  alert("OTP Generated");
  window.location.href = "otp.html";
}