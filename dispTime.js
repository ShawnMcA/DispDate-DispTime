// Function to display the current time

// Displays the current time in H:MM AM/PM
function displayTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = ('0' + today.getMinutes()).slice(-2);
    let ext = hours > 12 ? 'PM' : 'AM';
    hours %= 12;
    let currentTime = hours + ':' + minutes + ' ' + ext;

    console.log(`The current time is: ${currentTime}`);
}

displayTime();