// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the calculate button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add event listener to the calculate button
    calculateButton.addEventListener('click', myExcelFuns);
    
    // Get the theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    
    // Add event listener to the theme toggle button
    themeToggle.addEventListener('click', toggleTheme);
    
    // Initialize result variable
    let result;
    
    // Function to perform Excel calculations
    function myExcelFuns() {
        // Get user input
        const numberStr = document.getElementById('numbers').value;
        
        // Check if input is empty
        if (numberStr.trim() === "") {
            alert("Please enter numbers separated by spaces");
            return;
        } else {
            // Remove extra spaces before and after the input
            const trimmedStr = numberStr.trim();
            
            // Convert string to array
            const numberArr = trimmedStr.split(" ");
            
            // Create a new array with only numbers and no spaces
            const finalNumericArray = [];
            
            // Loop through the array to remove spaces and convert string to number
            for (let i = 0; i < numberArr.length; i++) {
                // Check if the element is not empty and is a number
                if (numberArr[i] !== "" && !isNaN(numberArr[i])) {
                    // Convert string to number and add to final array
                    finalNumericArray.push(Number(numberArr[i]));
                }
            }
            
            // Check which radio button is checked and do the calculation
            if (document.getElementById('sum').checked) {
                // Calculate sum
                result = finalNumericArray.reduce((total, num) => total + num, 0);
            } else if (document.getElementById('avg').checked) {
                // Calculate average
                const total = finalNumericArray.reduce((total, num) => total + num, 0);
                result = total / finalNumericArray.length;
            } else if (document.getElementById('max').checked) {
                // Find maximum value
                result = Math.max(...finalNumericArray);
            } else {
                // Find minimum value
                result = Math.min(...finalNumericArray);
            }
            
            // Display the result
            document.getElementById('result').textContent = result;
        }
    }
    
    // Function to toggle between light and dark theme
    function toggleTheme() {
        const body = document.body;
        
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggle.textContent = "Switch to Dark Theme";
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggle.textContent = "Switch to Light Theme";
        }
    }
});