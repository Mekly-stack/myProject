// Function for selecting services
function selectService(event) {
    this.classList.toggle("selected");
  
    if (this.classList.contains('selected')) {
      selectedServices.push(this.id);
    } else {
      const index = selectedServices.indexOf(this.id);
      if (index > -1) {
        selectedServices.splice(index, 1);
      }
    }
  
    // Save the current state to localStorage
    localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
  }
  
  // Initialize the selectedServices array from localStorage
  let selectedServices = JSON.parse(localStorage.getItem('selectedServices') || '[]');
  
  // Add event listeners to cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', selectService);
    // Optionally restore the selected state based on selectedServices
    if (selectedServices.includes(card.id)) {
      card.classList.add('selected');
    }
  });
  
  // Form submission logic
  document.getElementById('carRepairForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submit action
    // Show the thank you modal
    var thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
    thankYouModal.show();
  });
  
  // Multi-step form navigation logic
  let currentStep = 1;
  
  function nextStep() {
    if (currentStep < 2) {
      document.getElementById('step' + currentStep).style.display = 'none';
      currentStep++;
      document.getElementById('step' + currentStep).style.display = 'block';
    }
  }
  
  function prevStep() {
    if (currentStep > 1) {
      document.getElementById('step' + currentStep).style.display = 'none';
      currentStep--;
      document.getElementById('step' + currentStep).style.display = 'block';
    }
  }
  