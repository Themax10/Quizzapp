const correctPassword = "0815"; // Passwort auf "0815" setzen
const quizData = [
    { question: "Wofür stehen die Sterne auf der amerikanischen Flagge?", answer: "Staaten" },
    { question: "Was ist der nächstgelegene Stern zu uns?", answer: "Alpha Centauri" },
    { question: "Wie viele Monde passen in die Erde?", answer: "50" },
    { question: "Wie viele Länder gibt es auf der Welt?", answer: "194 Länder" },
    { question: "Wie viele Kontinente gibt es?", answer: "7 Kontinente" },
    { question: "Welcher Planet ist der Sonne am nächsten?", answer: "Merkur" },
    { question: "Wodurch begann der erste Weltkrieg?", answer: "Attentat auf Franz Ferdinand" },
    { question: "Wann war der erste Weltkrieg?", answer: "1914-1918" },
    { question: "Wann begann der erste Weltkrieg?", answer: "1914" },
    { question: "Wer ist unser Bundespräsident?", answer: "Frank-Walter Steinmeier" },
    { question: "Gibt es mehr Flugzeuge im Meer, oder mehr Boote im Weltall?", answer: "Mehr Flugzeuge im Meer" },
    { question: "Wie alt ist Olaf Scholz?", answer: "Er wurde 1958 geboren" },
    { question: "Was ist Hawachi?", answer: "Hawachi ist eine japanische Suppe" },
    { question: "Wer war der erste Bundeskanzler in Deutschland?", answer: "Konrad Adenauer" },
    { question: "Was sind die ersten 5 Nachkommastellen von Pi?", answer: "3,14159" },
    { question: "Wie viele Autos gibt es im Weltall?", answer: "Ein Auto (Tesla)" },
    { question: "In welchem Jahr begann der Zweite Weltkrieg?", answer: "1939" },
    { question: "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?", answer: "Konrad Adenauer" },
    { question: "Wie viele Zähne hat ein erwachsener Mensch normalerweise?", answer: "32" },
    { question: "Wie wird die Zahl unter dem Bruchstrich bezeichnet?", answer: "Nenner" },
    { question: "Wie viele Planeten hat unser Sonnensystem?", answer: "8" },
    { question: "Wie ist die Umrechnung von Grad in Fahrenheit?", answer: "°F = (°C × 9/5) + 32" },
    { question: "Mit wie viel Promille darf man noch Auto fahren?", answer: "0,4 Promille" },
    { question: "Wie nennt man die Gewaltenteilung in einer Demokratie?", answer: "Exekutive, Legislative, Judikative" },
    { question: "Wie viele Sterne hat der große Wagen?", answer: "7 Sterne" },
    { question: "Wie viele Länder hat Europa?", answer: "44 Länder" },
    { question: "War der kalte Krieg warm oder kalt?", answer: "Kalt, weil er passiv war" },
    { question: "Wie heißt Franz Kafka ohne die F's?", answer: "Ranz Kaka" },
    { question: "Wie lang ging der Hundertjährige Krieg?", answer: "116 Jahre" },
    { question: "Welcher ist der höchste Berg in Deutschland?", answer: "Zugspitze" },
    { question: "Wie viele H's hat Habicht?", answer: "2 H's" },
    { question: "Welcher Fluss fließt durch Paris?", answer: "Die Seine" },
    { question: "Wer erfand die Glühbirne?", answer: "Thomas Edison" },
    { question: "Wer schrieb Romeo und Julia?", answer: "William Shakespeare" },
    { question: "In welcher Sportart wird der Wimbledon-Titel vergeben?", answer: "Tennis" },
    { question: "Welcher ist der höchste Berg Europas?", answer: "Mont Blanc" },
    { question: "Wie heißt der tiefste Punkt der Welt?", answer: "Mariangraben" },
    { question: "Wie viele Fußballspieler sind in einer Mannschaft?", answer: "11" },
    { question: "Wer hat letztes Jahr die EM gewonnen?", answer: "Spanien" },
    { question: "Wie heißt der Trainer der Nationalmannschaft?", answer: "Julian Nagelsmann" },
    { question: "Wer hat letztes Jahr die Nationalmannschaft verlassen?", answer: "Toni Kroos, Thomas Müller, Manuel Neuer, İlkay Gündoğan" }
];

let currentQuestionIndex = 0;
let points = 0;

const passwordContainer = document.getElementById("password-container");
const quizContainer = document.getElementById("quiz-container");
const submitPasswordButton = document.getElementById("submit-password");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

submitPasswordButton.addEventListener("click", function () {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        passwordContainer.style.display = "none";
        quizContainer.style.display = "block";
        updateQuestion();
    } else {
        errorMessage.style.display = "block";
    }
});

const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const showAnswerButton = document.getElementById('show-answer');
const pointsEl = document.getElementById('points');
const decreasePointsButton = document.getElementById('decrease-points');
const increasePointsButton = document.getElementById('increase-points');
const prevButton = document.getElementById('prev-question');
const nextButton = document.getElementById('next-question');
const copyResultButton = document.getElementById('copy-result');

function updateQuestion() {
    const currentData = quizData[currentQuestionIndex];
    questionEl.textContent = `Frage ${currentQuestionIndex + 1}: ${currentData.question}`;
    answerEl.style.display = 'none';
    answerEl.textContent = currentData.answer;
    showAnswerButton.disabled = false;
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === quizData.length - 1;
}

showAnswerButton.addEventListener('click', () => {
    answerEl.style.display = 'block';
    showAnswerButton.disabled = true;
});

increasePointsButton.addEventListener('click', () => {
    points++;
    pointsEl.textContent = points;
});

decreasePointsButton.addEventListener('click', () => {
    points--;
    pointsEl.textContent = points;
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    }
});

copyResultButton.addEventListener('click', () => {
    const resultText = `Das Team hat insgesamt ${points} Punkte erzielt.`;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Ergebnis wurde in die Zwischenablage kopiert!");
    });
});
