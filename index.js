// Let's debug why the analyze button might not be working
// We'll create a simple simulation of the HTML structure

// First, let's log what elements we're trying to access
console.log("Debug: Checking analyze button issue");

// Mock HTML Structure for testing
const mockHTML = `
<div class="upload-container">
    <div class="upload-area" id="uploadContainer">
        <input type="file" id="foodImage" name="food-image" accept="image/*">
        <div class="upload-content">...</div>
    </div>
    <div class="preview-container" id="previewContainer" style="display: none;">
        <img id="imagePreview" src="#" alt="Ingredients Preview">
        <button id="changeImage" class="change-btn">
            <i class="fas fa-redo"></i>
        </button>
    </div>
    <div class="loading-spinner" id="loadingSpinner"></div>
    <button id="analyzeBtn" class="upload-btn" disabled>Analyze Ingredients</button>
</div>
`;

// Let's look at what might be causing issues with the analyze button
console.log("Possible issues:");
console.log("1. Button might remain disabled after image upload");
console.log("2. Event listener might not be properly attached");
console.log("3. HTML structure or IDs might not match JavaScript expectations");
console.log("4. There could be a JavaScript error preventing execution");

// Let's propose a corrected JavaScript for the analyze button functionality
const correctedCode = `
// Get necessary elements
const fileInput = document.getElementById('foodImage');
const analyzeBtn = document.getElementById('analyzeBtn');
const uploadContainer = document.getElementById('uploadContainer');
const previewContainer = document.getElementById('previewContainer');
const imagePreview = document.getElementById('imagePreview');
const loadingSpinner = document.getElementById('loadingSpinner');

// File upload handling
fileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        // Create a FileReader to read the image
        const reader = new FileReader();
        
        // When file is read
        reader.onload = function(e) {
            // Show preview
            imagePreview.src = e.target.result;
            
            // Hide upload area, show preview
            uploadContainer.style.display = 'none';
            previewContainer.style.display = 'block';
            
            // Enable analyze button - this is crucial
            analyzeBtn.disabled = false;
        };
        
        // Start reading the file
        reader.readAsDataURL(this.files[0]);
    }
});

// Analyze button functionality
analyzeBtn.addEventListener('click', function() {
    console.log('Analyze button clicked');  // Debugging
    
    // Show loading spinner
    loadingSpinner.style.display = 'block';
    
    // Disable button during processing
    this.disabled = true;
    
    // Simulate processing (replace with actual API call)
    setTimeout(function() {
        loadingSpinner.style.display = 'none';
        analyzeBtn.disabled = false;
        
        alert('Analysis complete!');
        // Redirect or show results as needed
    }, 2000);
});
`;

console.log("\nCorrected code for the analyze button functionality:");
console.log(correctedCode);

// Propose a direct inline approach as an alternative solution
console.log("\nAlternative: Add inline onclick attribute to the button:");
console.log('<button id="analyzeBtn" class="upload-btn" disabled onclick="analyzeIngredients()">Analyze Ingredients</button>');

console.log("\nAnd corresponding function in script.js:");
console.log(`
function analyzeIngredients() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    const analyzeBtn = document.getElementById('analyzeBtn');
    
    // Show loading spinner
    if (loadingSpinner) loadingSpinner.style.display = 'block';
    
    // Disable button
    if (analyzeBtn) analyzeBtn.disabled = true;
    
    // Simulate analysis
    setTimeout(function() {
        if (loadingSpinner) loadingSpinner.style.display = 'none';
        if (analyzeBtn) analyzeBtn.disabled = false;
        
        alert('Ingredients successfully analyzed! Redirecting to recipes...');
        // window.location.href = 'results.html';  // Uncomment to redirect
    }, 2000);
}`);

// --- Contact form handling (simple client-side validation + simulated send) ---
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const msgBox = document.getElementById('formMessage');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      msgBox.textContent = 'Please fill all fields.';
      msgBox.style.color = '#ff6b6b';
      return;
    }

    if (!emailRegex.test(email)) {
      msgBox.textContent = 'Please enter a valid email.';
      msgBox.style.color = '#ff6b6b';
      return;
    }

    msgBox.textContent = 'Sending...';
    msgBox.style.color = '#333';

    // Simulate async send
    setTimeout(function() {
      msgBox.textContent = 'Thanks — your message was sent!';
      msgBox.style.color = '#0a0';
      form.reset();
    }, 900);
  });
});