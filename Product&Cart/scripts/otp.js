document.querySelector("form").addEventListener("submit", formsubmit);
var userpile = JSON.parse(localStorage.getItem("otpdatabase")) || [];
function formsubmit(event) {
    event.preventDefault();
    var ps_1 = document.querySelector("#ps_1").value;
    var ps_2 = document.querySelector("#ps_2").value;
    var ps_3 = document.querySelector("#ps_3").value;
    var ps_4 = document.querySelector("#ps_4").value;

    var otpdata = {
        num_1: ps_1,
        num_2: ps_2,
        num_3: ps_3,
        num_4: ps_4,
    };
    userpile.push(otpdata);
    localStorage.setItem("otpdatabase", JSON.stringify(userpile))
    alert("Payment Sucessful & Order Placed")
    window.location.href = "cart.html";
}