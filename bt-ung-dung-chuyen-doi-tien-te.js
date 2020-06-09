function validateForm() {
    let amount = document.getElementById("amount").value; //khai bao
    let first = document.getElementById("FCurrency").value;
    let last = document.getElementById("TCurrency").value;
    if (first === "VN") {
        if (last === "VN") {
            document.getElementById("output").innerHTML = amount;
        } else if (last === "USD") {
            let changeA = amount / 23000;
            document.getElementById("output").innerHTML = changeA;
        }
    }

    if (first === "USD") {
        if (last === "USD") {
            document.getElementById("output").innerHTML = amount;
        } else if (last === "VN") {
            let changeB = amount * 23000;
            document.getElementById("output").innerHTML = changeB;
        }
    }
}