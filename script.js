// Initial greeting message
window.onload = () => {
    setTimeout(() => {
        document.getElementById('greeting-message').innerHTML = "<p>Hello Queen, we were waiting for you...</p>";
    }, 1500);

    setTimeout(() => {
        document.getElementById('greeting-message').innerHTML = "<p>Today is a special day. Do you know what's today?</p>";
        document.getElementById('question-container').classList.remove('hidden');
    }, 3000);
};

// When "Yes" button is clicked
document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('question-container').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('greeting-message').innerHTML = "<p>Of course, you know it's your birthday 🎂</p>";
        showBirthdayCake();
    }, 1000);
});

// When "No" button is clicked
document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('question-container').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('greeting-message').innerHTML = "<p>You may have forgotten, but today is your birthday 🎂</p>";
        showBirthdayCake();
    }, 1000);
});

// Show the birthday cake
function showBirthdayCake() {
    document.getElementById('cake-container').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('cake-container').innerHTML += "<p>Happy Birthday!</p>";
        document.getElementById('trivia-container').classList.remove('hidden');
    }, 3000);
}

// Trivia Question
document.getElementById('submit-answer').addEventListener('click', function() {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    if (answer === "abdullah") {
        document.getElementById('trivia-container').classList.add('hidden');
        showLoveMessage();
    } else {
        document.getElementById('error-message').classList.remove('hidden');
    }
});

// Show the final love message
function showLoveMessage() {
    document.getElementById('final-message').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('hearts').innerHTML = '💖💖💖';
    }, 2000);
}


