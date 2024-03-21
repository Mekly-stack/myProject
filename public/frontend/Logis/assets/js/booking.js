// Using Skypack for Flatpickr
import flatpickr from 'https://cdn.skypack.dev/flatpickr';


let selectedService = localStorage.getItem('selectedService') || null;
let selectedDate = localStorage.getItem('selectedDate') || null;
let selectedTime = localStorage.getItem('selectedTime') || null;


function selectService(serviceId) {
    // If the same service is clicked again, deselect it
    if (selectedService === serviceId) {
        selectedService = null;
    } else {
        selectedService = serviceId;
    }
    localStorage.setItem('selectedService', selectedService);
    updateServiceCards();
}

function updateServiceCards() {
    document.querySelectorAll('.card').forEach(card => {
        if (card.id === selectedService) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
};


let currentStep = 1;
const totalSteps = 3;

function updateStep(direction) {
    const targetStep = currentStep + direction;
    if (targetStep >= 1 && targetStep <= totalSteps) {
        document.getElementById(`step${currentStep}`).style.display = 'none';
        currentStep = targetStep;
        document.getElementById(`step${currentStep}`).style.display = 'block';
        updateNavbarHighlight();
    }
}

function updateNavbarHighlight() {
    document.querySelectorAll('.pagination .page-item').forEach((item, index) => {
        item.classList.toggle('active', index + 1 === currentStep);
    });
}

function nextStep() {
    
    if (currentStep === 1 && !selectedService) {
        alert('Please select at least one service');
        return;
    }
    updateStep(1);
}



function prevStep() {
    updateStep(-1);
}

// DOMContentLoaded event to initialize Flatpickr and set up button event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Flatpickr
    flatpickr("#datePicker", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        defaultDate: selectedDate,
        onChange: function(selectedDates, dateStr, instance) {
            selectedDate = dateStr;
            localStorage.setItem('selectedDate', selectedDate);
        },
    });
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            selectService(this.id); // `this.id` refers to the id of the .card element
            
        });
    })
    
    
     const nextButtonStep1 = document.querySelector('#nextButton');
     if (nextButtonStep1) {
         nextButtonStep1.addEventListener('click', nextStep);
     }
 
     const nextButtonStep2 = document.querySelector('#nextButton2');
     if (nextButtonStep2) {
         nextButtonStep2.addEventListener('click', () => nextStep());
     }
 
     const prevButton = document.querySelector('#prevButton');
     if (prevButton) {
         prevButton.addEventListener('click', prevStep);
     }
 });
 
 const prevButtonStep3 = document.querySelector('#prevButtonStep3');
 if (prevButtonStep3) {
     prevButtonStep3.addEventListener('click', prevStep);
 }

// Handling the form submission
document.getElementById('carRepairForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (currentStep < totalSteps) {
        alert("Please complete all steps before submitting.");
        return;
    }
    if (!selectedDate || !selectedTime) {
        alert("Please select both a date and a time slot.");
        return;
    }
    // Implement your form submission logic here, for example, using fetch API to send data to a server.
    console.log("Form submitted!");
    const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'), {
        keyboard: false
    });
    thankYouModal.show();
});
