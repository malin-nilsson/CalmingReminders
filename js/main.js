const reminders = ["Asking for help is a sign of self-respect and self-awareness.",
  "I am in charge of how I feel and I choose to feel happy.",
  "I am optimistic because today is a new day.",
  "I breathe in trust, I exhale doubt.",
  "I celebrate the good qualities in others and myself.",
  "I do not rush through my life, I temper speed with stillness.",
  "I do not pretend to be anyone or anything other than who I am.",
  "I celebrate the good qualities in others and myself.",
  "  I breathe in calmness and breathe out nervousness.",
  "I strive for joy, not for perfection.",
];

window.onload = function () {
  let button = document.querySelector("button");
  button.addEventListener("click", () => generateAffirmation(reminders));
}

function generateAffirmation(reminders) {
  let reminderContainer = document.getElementById("reminder");
  reminderContainer.style.display = "block";
  let randomNum = Math.floor(Math.random() * reminders.length);
  reminderContainer.innerHTML = reminders[randomNum];
}