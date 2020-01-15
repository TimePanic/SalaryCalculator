function calculate() {

    // Gather initial values from user input
    let initSalary = document.getElementById("salary").value;

    // Check if user entered valid data

    if (isNaN(initSalary) == false) {

        // Check if user entered a value
        if (initSalary.length !== 0) {
            // Check if given salary is above the allowance
            if (initSalary > 12500) {
                let salary = initSalary - 12500;
                // Check the tax bracket 
                if (salary <= 50000) {
                    // Tax at 20%
                    let tax = (salary * 0.2).toFixed(2);
                    let taxMonthly = (tax / 12).toFixed(2);
                    let taxWeekly = (tax / 52).toFixed(2);
                    let taxDaily = (tax / 365).toFixed(2);

                    // Set the other tax to 0
                    document.getElementById("tax40").innerHTML = 0;
                    document.getElementById("tax45").innerHTML = 0;


                    // Set tax breakdown
                    document.getElementById("tax20").innerHTML = tax;
                    document.getElementById("yearly").innerHTML = tax;
                    document.getElementById("monthly").innerHTML = taxMonthly;
                    document.getElementById("weekly").innerHTML = taxWeekly;
                    document.getElementById("daily").innerHTML = taxDaily;

                    // Calculate net income
                    let net = initSalary - tax;
                    let netMonthly = net / 12;
                    let netWeekly = net / 52;
                    let netDaily = net / 365;


                    // Set net breakdown
                    document.getElementById("netYearly").innerHTML = net.toFixed(2);
                    document.getElementById("netMonthly").innerHTML = netMonthly.toFixed(2);
                    document.getElementById("netWeekly").innerHTML = netWeekly.toFixed(2);
                    document.getElementById("netDaily").innerHTML = netDaily.toFixed(2);
                }
                else if (salary > 50000 && salary <= 150000) {
                    // Tax at 40%
                    let tax = (salary * 0.4).toFixed(2);
                    let taxMonthly = (tax / 12).toFixed(2);
                    let taxWeekly = (tax / 52).toFixed(2);
                    let taxDaily = (tax / 365).toFixed(2);

                    // Set the other tax to 0
                    document.getElementById("tax20").innerHTML = 0;
                    document.getElementById("tax45").innerHTML = 0;

                    // Calculate tax breakdown
                    document.getElementById("tax40").innerHTML = tax;
                    document.getElementById("yearly").innerHTML = tax;
                    document.getElementById("monthly").innerHTML = taxMonthly;
                    document.getElementById("weekly").innerHTML = taxWeekly;
                    document.getElementById("daily").innerHTML = taxDaily;

                    // Calculate net income
                    let net = initSalary - tax;
                    let netMonthly = net / 12;
                    let netWeekly = net / 52;
                    let netDaily = net / 365;


                    // Set net breakdown
                    document.getElementById("netYearly").innerHTML = net.toFixed(2);
                    document.getElementById("netMonthly").innerHTML = netMonthly.toFixed(2);
                    document.getElementById("netWeekly").innerHTML = netWeekly.toFixed(2);
                    document.getElementById("netDaily").innerHTML = netDaily.toFixed(2);
                }
                else {
                    // Tax at 45%
                    let tax = (salary * 0.45).toFixed(2);
                    let taxMonthly = (tax / 12).toFixed(2);
                    let taxWeekly = (tax / 52).toFixed(2);
                    let taxDaily = (tax / 365).toFixed(2);

                    // Set the other tax to 0
                    document.getElementById("tax20").innerHTML = 0;
                    document.getElementById("tax40").innerHTML = 0;

                    // Calculate tax breakdown
                    document.getElementById("tax45").innerHTML = tax;
                    document.getElementById("yearly").innerHTML = tax;
                    document.getElementById("monthly").innerHTML = taxMonthly;
                    document.getElementById("weekly").innerHTML = taxWeekly;
                    document.getElementById("daily").innerHTML = taxDaily;
                    
                    /// Calculate net income
                    let net = initSalary - tax;
                    let netMonthly = net / 12;
                    let netWeekly = net / 52;
                    let netDaily = net / 365;


                    // Set net breakdown
                    document.getElementById("netYearly").innerHTML = net.toFixed(2);
                    document.getElementById("netMonthly").innerHTML = netMonthly.toFixed(2);
                    document.getElementById("netWeekly").innerHTML = netWeekly.toFixed(2);
                    document.getElementById("netDaily").innerHTML = netDaily.toFixed(2);
                }
            }
            else {
                // Sets all tax to 0
                document.getElementById("tax20").innerHTML = 0;
                document.getElementById("tax40").innerHTML = 0;
                document.getElementById("tax45").innerHTML = 0;
                document.getElementById("yearly").innerHTML = 0;
                document.getElementById("monthly").innerHTML = 0;
                document.getElementById("weekly").innerHTML = 0;
                document.getElementById("daily").innerHTML = 0;

                // Calculates net without tax
                document.getElementById("netYearly").innerHTML = initSalary
                document.getElementById("netMonthly").innerHTML = (initSalary / 12).toFixed(2);
                document.getElementById("netWeekly").innerHTML = (initSalary / 52).toFixed(2);
                document.getElementById("netDaily").innerHTML = (initSalary / 365).toFixed(2);
            }
        }
        else {
            alert("You have to enter a value. Please try again");
        }

    }
    else {
        alert("You have entered an invalid value. Please only enter numerical values.");
    }
}