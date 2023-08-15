
document.addEventListener("DOMContentLoaded", function () {

    const countdowns = document.querySelectorAll('.announcement-bar__countdown')

    if(!countdowns.length) {
        return; 
    }

    countdowns.forEach(countdown => {
        
        const countdownTimeSpan = countdown.querySelector(".countdown-time");
        const { deadline, errorMessage } = countdown.dataset;

        console.log(deadline)

        if ( countdownTimeSpan) {
            const deadlineUtc = new Date(deadline);
            const countdownOffset = deadlineUtc.getTimezoneOffset() * 60000; // Convert to milliseconds
        
            function updateCountdown() {
                const nowUtc = new Date();
                const now = nowUtc.getTime() + countdownOffset;
                const timeRemaining = deadlineUtc - now;
        
                if (timeRemaining > 0) {
                    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
                countdownTimeSpan.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                } else {
                countdownTimeSpan.textContent = errorMessage;
                }
            }
        
            setInterval(updateCountdown, 1000);
        }

    })

});