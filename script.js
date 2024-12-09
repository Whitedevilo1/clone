// Function to handle screen resize and ensure responsive behavior
function handleResize() {
    const windowWidth = window.innerWidth;
    
    // Adjust font sizes or other styles based on the screen width
    if (windowWidth <= 1300) {
        // Small screen adjustments, for example:
        document.querySelector('.hero> :nth-child(1)').style.fontSize = "32px";
        document.querySelector('.hero> :nth-child(2)').style.fontSize = "18px";
        document.querySelector('.hero> :nth-child(3)').style.fontSize = "18px";

        // Modify the FAQ section and other elements if needed
        document.querySelector('.faq h2').style.fontSize = "32px";

        // Adjust footer grid columns for smaller screens
        document.querySelector('.footer').style.gridTemplateColumns = "1fr 1fr";
    } else {
        // Reset to larger screen sizes
        document.querySelector('.hero> :nth-child(1)').style.fontSize = "48px";
        document.querySelector('.hero> :nth-child(2)').style.fontSize = "24px";
        document.querySelector('.hero> :nth-child(3)').style.fontSize = "20px";
        document.querySelector('.faq h2').style.fontSize = "48px";

        document.querySelector('.footer').style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    }
}

// Function to toggle FAQ answers
document.querySelectorAll('.faqbox').forEach(item => {
    item.addEventListener('click', () => {
        const svg = item.querySelector('svg');
        const nextElement = item.nextElementSibling;

        // Toggle the FAQ answer visibility
        if (nextElement && nextElement.classList.contains('answer')) {
            nextElement.classList.toggle('show');
            svg.classList.toggle('rotated');
        }
    });
});

// Function to handle resize event
window.addEventListener('resize', handleResize);

// Call the function initially to ensure responsiveness works from the start
handleResize();

// Function for handling the "Sign In" button click event
document.querySelector('.btn-red-sm').addEventListener('click', function() {
    alert('Redirecting to Sign In page...');  // Replace with actual login functionality
});

// Function for handling "English" language selection button click
document.querySelector('.btn').addEventListener('click', function() {
    alert('Language set to English.');
});
