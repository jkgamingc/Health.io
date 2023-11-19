new Vue({
    el: '#app',
    data: {
        patientFeatures: [
            { id: 1, name: 'Find a Specialist', link: 'find-specialist.html' },
            { id: 2, name: 'Virtual Consultation', link: 'doctor-chat.html' },
            { id: 3, name: 'Link E-Wallet', link: 'e-wallet-form.html' },
            { id: 4, name: 'Upload Prescriptions/Reports', link: 'uploadPrescriptions.html' }
        ]
    }
}); 

function submitEwalletForm(event) {
    event.preventDefault();

    // Basic form validation
    const walletUsername = document.getElementById('walletUsername').value;
    const walletPassword = document.getElementById('walletPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const securityCode = document.getElementById('securityCode').value;

    if (walletPassword !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
    }

    // Simulate sending form data to the server
    console.log('Sending data to the server:', { walletUsername, walletPassword, securityCode });
    // In a real-world scenario, you would send this data securely to your server for processing.

    // You can replace the log statement with actual API calls or AJAX requests.
}


function submitForm(){
	alert("Your data has been submitted successfully")
}
