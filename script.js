let valueDisplays = document.querySelectorAll(".num");
let duration = 4000; // 3 seconds

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let startTime = null;

    function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let current = Math.min(Math.floor(progress / duration * endValue), endValue);
        
        if (valueDisplay.nextElementSibling.textContent.includes("Intern to Full Time")) {
            valueDisplay.textContent = current + '%';
        } else {
            valueDisplay.textContent = '+' + current;
        }

        if (current < endValue) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
});