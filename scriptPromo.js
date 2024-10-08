document.getElementById('country').addEventListener('change', function() {
    var selectedCountry = document.getElementById('country').value;
    var submitButton = document.querySelector('.submit-btn');
    
    if (selectedCountry) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

document.getElementById('countryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var selectedCountry = document.getElementById('country').value;

    // Hide the form with a fade-out effect
    var form = document.getElementById('countryForm');
    form.classList.add('fade-out');

    // After the fade-out effect is done, display the relevant section
    setTimeout(function() {
        form.style.display = 'none'; // Ensure the form is hidden after the animation
        if (selectedCountry === 'Argentina') {
            document.getElementById('argentinaSection').classList.remove('hidden');
            document.getElementById('wsp-comprobante').classList.remove('hidden');
        } else if (selectedCountry === 'Uruguay') {
            document.getElementById('uruguaySection').classList.remove('hidden');
            document.getElementById('wsp-comprobante').classList.remove('hidden');
        } else {
            document.getElementById('otherSection').classList.remove('hidden');
            document.getElementById('wsp-comprobante').classList.remove('hidden');
            // Condición que deseas evaluar
let condition = true; // Esto puede ser cualquier expresión que resulte en un valor booleano

// Redireccionar basado en la condición
condition ? window.location.href = "https://goe.run/6697d2ba37a93" : console.log("La condición no se cumplió.");

        }
    }, 1000); // Match the timeout duration with the CSS animation duration
});
