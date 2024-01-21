(function () {
    // Setting the expiration date and deadline date
    const dueDate = new Date("2017-02-27");
    const daysDeadline = 60;
    const currentDate = new Date();

    // Calculating the difference in days
    const daysPassed = Math.floor((currentDate - dueDate) / (1000 * 60 * 60 * 24));

    // Transparency calculation
    if (daysPassed > 0) {
        const daysRemaining = daysDeadline - daysPassed;
        const opacity = Math.max(0, Math.min(daysRemaining / daysDeadline, 1));
        document.body.style.opacity = opacity;
    }
})();
