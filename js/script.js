document.getElementById("calculator").addEventListener("submit", function(event) {
    event.preventDefault(); // Stops website refreshing

    // Get input values
    const rType = document.getElementById("r_type").value;
    const rPrice = parseFloat(document.getElementById("r_price").value);
    const pBonus = parseFloat(document.getElementById("p_bonus").value);
    const fBonus = parseFloat(document.getElementById("f_bonus").value);
    const pWage = parseFloat(document.getElementById("p_wage").value);

    // Calculations
    const profit = rPrice - pWage;


    // Display result
    document.getElementById("profit").innerText = `Profit Per Unit: ${profit.toFixed(3)} + ${iron.price}`;
});