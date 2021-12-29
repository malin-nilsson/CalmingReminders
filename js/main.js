const reminders = ["Asking for help is a sign of self-respect and self-awareness.",
  "I am in charge of how I feel and I choose to feel happy.",
  "I am optimistic because today is a new day.",
  "I do not pretend to be anyone or anything other than who I am.",
  "I celebrate the good qualities in others and myself.",
  "I breathe in calmness and breathe out nervousness.",
  "I strive for joy, not for perfection.",
  "I have everything I need to succeed.",
  "My life is not a race or competition.",
  "Sometimes the work is resting.",
  "Today I celebrate that I am younger than I’m ever going to be.",
  "Changing my mind is a strength, not a weakness.",
  "When I forgive myself, I free myself.",
  "I am more than my circumstances dictate.",
  "I am responsible for myself, and I start there.",
];

window.onload = function () {
  let button = document.querySelector("button");
  button.addEventListener("click", () => generateAffirmation(reminders));
}

function generateAffirmation(reminders) {
  let reminderContainer = document.querySelector(".reminder-container");
  reminderContainer.style.display = "block";
  let reminder = document.getElementById("reminder");
  reminder.style.display = "block";
  let randomNum = Math.floor(Math.random() * reminders.length);
  reminder.innerHTML = reminders[randomNum];
}