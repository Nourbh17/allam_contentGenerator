// document.addEventListener("DOMContentLoaded", function() {
//     const splashScreen = document.getElementById("splash-screen");
//     const mainContent = document.getElementById("main-content");

//     // Load the Lottie animation
//     const animation = lottie.loadAnimation({
//         container: document.getElementById('lottie-animation'), // The container ID
//         renderer: 'svg',
//         loop: false, // Play only once
//         autoplay: true,
//         path: '/static/Animation_-_1731052247671.json' // Path to your Lottie animation file in Flask static folder
//     });

//     // When animation ends, hide the splash screen
//     animation.addEventListener('complete', () => {
//         splashScreen.style.display = 'none';
//         mainContent.style.display = 'block';
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    // Load the Lottie animation
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: false, // Play only once
        autoplay: true,
        path: '/static/Animation_-_1731052247671.json' // Path to your Lottie animation file
    });

    // Log when animation starts and ends
    animation.addEventListener('complete', () => {
        console.log('Animation complete');
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
    });
});
animation.addEventListener('complete', () => {
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 500); // Delay to allow animation to fully finish
});


// document.addEventListener("DOMContentLoaded", function() {
//     const optionsViewButton = document.getElementById("options-view-button");
//     const selectButton = document.getElementById("select-button");
//     const selectedValue = document.getElementById("selected-value");
//     const options = document.querySelectorAll("#options .option input[type='radio']");
//     const placeholder = document.getElementById("select-placeholder");

//     options.forEach(option => {
//         option.addEventListener("change", function() {
//             // Get the platform label
//             const selectedPlatform = option.value.charAt(0).toUpperCase() + option.value.slice(1);
            
//             // Set the selected value
//             selectedValue.innerHTML = <span>${selectedPlatform}</span>;
            
//             // Close the dropdown
//             optionsViewButton.checked = false;
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const optionsViewButton = document.getElementById("options-view-button");
    const selectedValue = document.getElementById("selected-value");
    const selectBox = document.getElementById("select-box");
    const options = document.querySelectorAll("#options .option input[type='radio']");
    
    options.forEach(option => {
        option.addEventListener("change", function() {
            selectBox.classList.remove("instagram", "facebook", "twitter", "linkedin");

            const selectedPlatform = option.value;
            
//             const selectedPlatform = option.value.charAt(0).toUpperCase() + option.value.slice(1);
            selectBox.classList.add(selectedPlatform);
            const selectedPlatformLabel = option.parentElement.querySelector(".label").innerText;

            // Set the selected value in Arabic
            selectedValue.innerHTML = `<span>${selectedPlatformLabel}</span>;`

            console.log(selectedPlatform)
            if (selectedPlatform == "linkedin")
                selectedValue.innerHTML = `<i class="fab fa-linkedin-in"></i> <span dir="rtl" style="text-align: right;">${selectedPlatformLabel}</span>`;
            else if (selectedPlatform == "facebook")
                selectedValue.innerHTML = `<i class="fab fa-facebook-f"></i> <span dir="rtl" style="text-align: right;">${selectedPlatformLabel}</span>`;
            else
                selectedValue.innerHTML = `<i class="fab fa-${selectedPlatform}"></i> <span dir="rtl" style="text-align: right;">${selectedPlatformLabel}</span>`;
            
            optionsViewButton.checked = false;
        });
    });
});
const textarea = document.getElementById("content");

    textarea.addEventListener("input", function () {
        // Reset height to auto to shrink the textarea if content is deleted
        textarea.style.height = "auto";
        // Set the height to the scroll height
        textarea.style.height = textarea.scrollHeight + "px";
    });