// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the send button element
    const sendButton = document.getElementById('sendButton');
    
    // Add event listener to the send button
    sendButton.addEventListener('click', getUserInfo);
    
    // Function to get and display user information
    function getUserInfo() {
        // Get all form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const province = document.getElementById('province').value.trim();
        
        // Get selected membership
        let membership = "";
        if (document.getElementById('premium').checked) {
            membership = "Premium";
        } else if (document.getElementById('standard').checked) {
            membership = "Standard";
        } else if (document.getElementById('basic').checked) {
            membership = "Basic";
        }
        
        // Validate form
        if (firstName === "" || lastName === "" || email === "" || address === "" || city === "" || province === "") {
            alert("Please fill in all fields");
            return;
        }
        
        // Create full name
        const fullName = firstName + " " + lastName;
        
        // Create output HTML
        const outputHTML = `
            <h2>User Information</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p>${city}, ${province}</p>
            <p><strong>Membership:</strong> ${membership}</p>
        `;
        
        // Display the output
        document.getElementById('output').innerHTML = outputHTML;
    }
});