2// Number Guessing Game in TypeScript

// Generate a random number between 1 and 100
const secretNumber: number = Math.floor(Math.random() * 100) + 1;

// Initialize the number of attempts
let attempts: number = 0;

// Function to start the game
function startGame(): void {
  console.log("Welcome to the Number Guessing Game!");
  console.log("Try to guess the secret number between 1 and 100.");

  // Start the first attempt
  makeGuess();
}

// Function to make a guess
function makeGuess(): void {
  // Increment the number of attempts
  attempts++;

  // Get user input
  const userGuess: number = parseInt(prompt("Enter your guess: ") || "0");

  // Check if the guess is correct
  if (userGuess === secretNumber) {
    console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
  } else {
    // Provide feedback and make another guess
    console.log(`Try again! Your guess is ${userGuess < secretNumber ? "too low" : "too high"}.`);
    makeGuess();
  }
}

// Start the game
startGame()