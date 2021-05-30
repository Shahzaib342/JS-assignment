//perform calculation based on the parameters
function calculateValue(operation) {
    let value1 = document.getElementById("number_1").value;
    let value2 = document.getElementById("number_2").value;
    if (value1 == "" || value2 == "") {
        alert("Please enter both values");
        return false;
    }

    let calculated_value = 0;
    switch (operation) {
        case "Add":
            calculated_value = document.getElementById("total_value").innerHTML = parseFloat(value1) + parseFloat(value2);
            break;
        case "Subtract":
            calculated_value = document.getElementById("total_value").innerHTML = parseFloat(value1) - parseFloat(value2);
            break;
        case "Multiply":
            calculated_value = document.getElementById("total_value").innerHTML = parseFloat(value1) * parseFloat(value2);
            break;
        case "Divide" :
            calculated_value = document.getElementById("total_value").innerHTML = parseFloat(value1) / parseFloat(value2);
            break;
    }

    document.getElementById("first-num").innerHTML = "First Number: " + value1;
    document.getElementById("second-num").innerHTML = "Second Number: " + value2;
    document.getElementById("operation").innerHTML = "Operation: " + operation;
}
