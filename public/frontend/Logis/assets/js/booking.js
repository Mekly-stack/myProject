// Initialize the selectedServices array from localStorage
let selectedServices = JSON.parse(localStorage.getItem('selectedServices') || '[]');

function toggleServiceSelection(serviceId) {
    const index = selectedServices.indexOf(serviceId);
    if (index > -1) {
        selectedServices.splice(index, 1);
    } else {
        selectedServices.push(serviceId);
    }
    localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
}

function updateServiceCards() {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('selected', selectedServices.includes(card.id));
    });
}

// Bind click event to each service card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle("selected");
        toggleServiceSelection(this.id);
        updateServiceCards();
    });
});

// Multi-step form navigation logic
let currentStep = 1;
const totalSteps = 3;

function updateStep(direction) {
    const targetStep = currentStep + direction;
    if (targetStep >= 1 && targetStep <= totalSteps) {
        document.getElementById(`step${currentStep}`).style.display = 'none';
        currentStep = targetStep;
        document.getElementById(`step${currentStep}`).style.display = 'block';
      // Update the navbar to reflect the current step
      updateNavbarHighlight();
      }
}

function updateNavbarHighlight() {
  document.querySelectorAll('.pagination .page-item').forEach((item, index) => {
      if (index + 1 === currentStep) {
          item.classList.add('active'); // Highlight the current step
      } else {
          item.classList.remove('active'); // Remove highlight from other steps
      }
  });
}


function nextStep() {
    // Example validation for step 1
    if (currentStep === 1 && selectedServices.length === 0) {
        alert('Please select at least one service');
        return;
    }
    updateStep(1);
    updateNavbarHighlight()
}

function prevStep() {
    updateStep(-1);
    updateNavbarHighlight()
}

// Step 3 Date & time
document.querySelectorAll('.day-btn').forEach(btn => {
  btn.addEventListener('click', function() {
      document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('selected'));
      this.classList.add('selected');
      // Optionally, store the selected day
      localStorage.setItem('selectedDay', this.getAttribute('data-day'));
  });
});

document.querySelectorAll('.time-btn').forEach(btn => {
  btn.addEventListener('click', function() {
      document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('selected'));
      this.classList.add('selected');
      // Optionally, store the selected time slot
      localStorage.setItem('selectedTime', this.getAttribute('data-time'));
  });
});


document.getElementById('carRepairForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submit action

  // Assume totalSteps is the total number of steps in the form
  if (currentStep < totalSteps) {
      alert("Please complete all steps before submitting.");
      return; // Stop the submission since not all steps are completed
  }

  // Assuming Step 3 includes the date and time selection
  if (!localStorage.getItem('selectedDay') || !localStorage.getItem('selectedTime')) {
      alert("Please select both a day and a time slot.");
      return; // Stop the submission since date and/or time are not selected
  }

  // All checks passed, form is ready to be submitted
  console.log("Form submitted!");

  // Here, implement the AJAX request or similar to submit the form data
  // Then, show the thank you modal
  var thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'), {
      keyboard: false
  });
  thankYouModal.show();
});
