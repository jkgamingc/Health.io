function generatePrescription() {
    const userSymptoms = document.getElementById('user-symptoms').value.trim();
    if (userSymptoms === '') {
        alert('Please describe your symptoms.');
        return;
    }

    const prescriptionResult = prescribeMedicine(userSymptoms);
    displayPrescription(prescriptionResult);
}

function prescribeMedicine(symptoms) {
    // Simulate AI prescription logic (replace with a real AI/NLP implementation)
    // For simplicity, this example uses a basic set of predefined responses.
    const prescriptions = {
        cold: 'Take over-the-counter cold medicine and get plenty of rest.',
        headache: 'You can take acetaminophen or ibuprofen for your headache.',
        stomachache: 'Avoid spicy and heavy foods. Consider taking PAN 20 for childrens and PAN 40 for adults..',
        default: 'Based on your symptoms, it is recommended to consult with a healthcare professional.'
    };

    const lowerCaseSymptoms = symptoms.toLowerCase();
    
    if (lowerCaseSymptoms.includes('cold')) {
        return prescriptions.cold;
    } else if (lowerCaseSymptoms.includes('headache')) {
        return prescriptions.headache;
    } else if (lowerCaseSymptoms.includes('stomachache')) {
        return prescriptions.stomachache;
    } else {
        return prescriptions.default;
    }
}

function displayPrescription(result) {
    const prescriptionResultContainer = document.getElementById('prescription-result');
    prescriptionResultContainer.innerHTML = `<strong>Prescription:</strong> ${result}`;
}