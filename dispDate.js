// Function to display the current date

// Displays current date in MM-DD-YYYY
function displayDate() {
    let today = new Date();
    let month = today.getMonth() + 1;
    let days = today.getDate();
    let years = today.getFullYear();
    let date = month + '-' + days + '-' + years;

    console.log(`The current date is: ${date}`);
}

displayDate();