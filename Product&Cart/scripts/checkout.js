var amount = JSON.parse(localStorage.getItem("total_value"));
//console.log(amount)
document.getElementById("amount").innerHTML = "";
document.getElementById("amount").innerText = `$${amount}`;


var total = amount;
document.getElementById("total").innerHTML = "";
document.getElementById("total").innerText = `$${total}`;