// ----------------------------
// 🎵 Setlist Generator
// ----------------------------

const songs = [
  "No Body European Tour Intro",
  "A Marrow Escape",
  "The Final Pulse",
  "Shadow Over the Stage",
  "Encore: Lights Out"
];
/* Original shuffle below
 function generateSetlist() {
   const shuffledSongs = songs.sort(() => Math.random() - 0.5);
   document.getElementById("setlist").innerHTML =
   shuffledSongs.map(song => `<li>${song}</li>`).join('');
// } */ 
function generateSetlist() {
  // Make a copy of the songs array so we don’t modify the original
  const shuffled = [...songs];

  // Fisher–Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Select the UL element in the DOM
  const ul = document.getElementById('setlist');
  ul.innerHTML = ''; // Clear any existing list items

  // Loop through shuffled songs and append each as an <li>
  for (const song of shuffled) {
    const li = document.createElement('li');
    li.textContent = song;
    ul.appendChild(li);
  }
}


document.getElementById("generateSetlist").addEventListener("click", generateSetlist);

// ----------------------------
// ⏳ Countdown Timer
// ----------------------------

const tourStart = new Date("2025-08-01T20:00:00");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = tourStart - now;

  if (diff <= 0) {
    countdown.textContent = "The tour has started!";
    clearInterval(timer);
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `⏰ ${hours}h ${minutes}m ${seconds}s until showtime`;
}

const timer = setInterval(updateCountdown, 1000);

// ----------------------------
// 🛠️ Feature Scaffolds
// ----------------------------

// ----------------------------
// 1️⃣ VIP Ticket Winner Generator
// ----------------------------

document.getElementById("vipWinner").innerHTML = `
  <h3>VIP Ticket Winner</h3>
  <button id="pickWinner">Pick Winner</button>
  <div id="winnerOutput"></div>
`;

const emails = ["fan1@example.com", "fan2@example.com", "fan3@example.com"];

document.getElementById("pickWinner").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * emails.length);
  const winner = emails[randomIndex];
  document.getElementById("winnerOutput").textContent = `🎉 Winner: ${winner}`;
});

// ----------------------------
// 2️⃣ Fan Favorite Showdown
// ----------------------------

document.getElementById("fanFavorite").innerHTML = `
  <h3>Fan Favorite Showdown</h3>
  <button id="vote">Vote</button>
  <div id="voteCount">Votes: 0</div>
`;

let votes = 0;

document.getElementById("vote").addEventListener("click", () => {
  votes++;
  document.getElementById("voteCount").textContent = `Votes: ${votes}`;
});

// ----------------------------
// 3️⃣ Tour Date Spotlight
// ----------------------------

document.getElementById("tourHighlight").innerHTML = `
  <h3>Tour Date Spotlight</h3>
  <ul>
    <li id="cityOslo">Oslo</li>
    <li id="cityBerlin">Berlin</li>
    <li id="cityLondon">London</li>
  </ul>
  <div id="tourInfo"></div>
`;

document.getElementById("cityOslo").addEventListener("click", () => {
  document.getElementById("tourInfo").textContent = "📍 Oslo: August 1 @ Black Fjord Arena";
});

document.getElementById("cityBerlin").addEventListener("click", () => {
  document.getElementById("tourInfo").textContent = "📍 Berlin: August 4 @ Haus der Schatten";
});

document.getElementById("cityLondon").addEventListener("click", () => {
  document.getElementById("tourInfo").textContent = "📍 London: August 8 @ The Underground Dome";
});


// ----------------------------
// 4️⃣ On the Road Again
// ----------------------------

document.getElementById("nextTourStop").innerHTML = `
  <h3>On the Road Again</h3>
  <div id="nextStop"></div>
`;

// Tour schedule with city names and show dates
const tourSchedule = [
  { city: "Oslo", date: "2025-08-01" },
  { city: "Berlin", date: "2025-08-05" },
  { city: "London", date: "2025-08-10" }
];

function showNextTourStop() {
  const today = new Date();
  let upcomingStop = null;

  // Check each tour date to find the next one after today
  for (let i = 0; i < tourSchedule.length; i++) {
    const tourDate = new Date(tourSchedule[i].date);
    if (tourDate > today) {
      upcomingStop = tourSchedule[i];
      break;
    }
  }

  // Display the next stop or a message if all shows are done
  const nextStopDiv = document.getElementById("nextStop");

  if (upcomingStop) {
    nextStopDiv.textContent = `🎤 Next Stop: ${upcomingStop.city} on ${upcomingStop.date}`;
  } else {
    nextStopDiv.textContent = "✅ All tour dates completed!";
  }
}

// Run the function right away when the page loads
showNextTourStop();

// ----------------------------
// 5️⃣ Entry Checkpoint
// ----------------------------

document.getElementById("emailCheck").innerHTML = `
  <h3>Entry Checkpoint</h3>
  <input type="email" id="emailInput" placeholder="Enter email">
  <button id="checkEmail">Check</button>
  <div id="emailResult"></div>
`;

document.getElementById("checkEmail").addEventListener("click", () => {
  const input = document.getElementById("emailInput").value;
  const resultDiv = document.getElementById("emailResult");

  // Simple check to see if it looks like an email
  const isEmailValid = input.includes("@") && input.includes(".");

  if (isEmailValid) {
    resultDiv.textContent = "✅ Valid email";
  } else {
    resultDiv.textContent = "❌ Invalid email – try again!";
  }
});

// ----------------------------
// 6️⃣ Band Bio Toggle
// ----------------------------

document.getElementById("bioToggle").innerHTML = `
  <h3>Band Bio Toggle</h3>
  <button id="toggleBio">Show/Hide Bio</button>
  <p id="bio" style="display:none;">
    Skullcapz is a heavy metal band from Norway, known for their dark, intense sound and high-energy shows.
  </p>
`;

document.getElementById("toggleBio").addEventListener("click", () => {
  const bioText = document.getElementById("bio");

  // Show the bio if hidden, or hide it if visible
  if (bioText.style.display === "none") {
    bioText.style.display = "block";
  } else {
    bioText.style.display = "none";
  }
});
