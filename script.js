const correctPassword = "0815"; // Passwort auf "0815" setzen
const quizData = [
    { question: "Wofür stehen die Sterne auf der amerikanischen Flagge?", answer: "Für die 50 Staaten" },
    { question: "Was ist der nächstgelegene Stern zu uns?", answer: "Alpha Centauri" },
    { question: "Wie viele Monde passen in die Erde?", answer: "50" },
    { question: "Wie viele Länder gibt es auf der Welt?", answer: "194" },
    { question: "Wie viele Kontinente gibt es?", answer: "7" },
    { question: "Welcher Planet ist der Sonne am nächsten?", answer: "Merkur" },
    { question: "Wodurch begann der erste Weltkrieg?", answer: "Attentat auf Franz Ferdinand" },
    { question: "Wann war der erste Weltkrieg?", answer: "1914-1918" },
    { question: "Wer ist unser Bundespräsident?", answer: "Frank-Walter Steinmeier" },
    { question: "Gibt es mehr Flugzeuge im Meer, oder mehr Boote im Weltall?", answer: "Mehr Flugzeuge im Meer" },
    { question: "Wie alt ist Olaf Scholz?", answer: "Er wurde 1958 geboren, ist 66 Jahre alt (Stand 2025)" },
    { question: "Was ist Hawachi?", answer: "Eine japanische Suppe" },
    { question: "Wer war der erste Bundeskanzler in Deutschland?", answer: "Konrad Adenauer" },
    { question: "Was sind die ersten 5 Nachkommastellen von Pi?", answer: "3,14159" },
    { question: "Wie viele Autos gibt es im Weltall?", answer: "Ein Tesla" },
    { question: "In welchem Jahr begann der Zweite Weltkrieg?", answer: "1939" },
    { question: "Wie viele Zähne hat ein erwachsener Mensch normalerweise?", answer: "32" },
    { question: "Wie wird die Zahl unter dem Bruchstrich bezeichnet?", answer: "Nenner" },
    { question: "Wie viele Planeten hat unser Sonnensystem?", answer: "8" },
    { question: "Wie ist die Umrechnung von Grad in Fahrenheit?", answer: "Formel: °F = (°C × 9/5) + 32. Beispiel: 0°C = 32°F" },
    { question: "Mit wie viel Promille darf man noch Auto fahren?", answer: "0,5 Promille für Fahrer ab 21 Jahren, 0,0 für Fahranfänger und unter 21 Jahren" },
    { question: "Wie nennt man die Gewaltenteilung in einer Demokratie?", answer: "Exekutive, Legislative, Judikative" },
    { question: "Wie viele Sterne hat der große Wagen?", answer: "7 Sterne" },
    { question: "Wie viele Länder hat Europa?", answer: "44 Länder" },
    { question: "War der kalte Krieg warm oder kalt?", answer: "Kalt" },
    { question: "Wie lang ging der Hundertjährige Krieg?", answer: "116 Jahre" },
    { question: "Welcher ist der höchste Berg in Deutschland?", answer: "Zugspitze" },
    { question: "Wie viele H's hat Habicht?", answer: "2 H's" },
    { question: "Welcher Fluss fließt durch Paris?", answer: "Die Seine" },
    { question: "Wer erfand die Glühbirne?", answer: "Thomas Edison" },
    { question: "Wer schrieb Romeo und Julia?", answer: "William Shakespeare" },
    { question: "In welcher Sportart wird der Wimbledon-Titel vergeben?", answer: "Tennis" },
    { question: "Welcher ist der höchste Berg Europas?", answer: "Mont Blanc" },
    { question: "Wie heißt der tiefste Punkt der Welt?", answer: "Mariangraben" },
    { question: "Wie viele Fußballspieler sind in einer Mannschaft?", answer: "11 Spieler pro Team auf dem Spielfeld" },
    { question: "Wer hat letztes Jahr die EM gewonnen?", answer: "Spanien" },
    { question: "Wie heißt der Trainer der Nationalmannschaft?", answer: "Julian Nagelsmann" },
    { question: "Wer hat letztes Jahr die Nationalmannschaft verlassen?", answer: "Kroos, Müller, Neuer, Gündogan" },
    { question: "Wie hoch ist der Mount Everest?", answer: "8848 m" },
    { question: "Wann fiel die Berliner Mauer?", answer: "9.11.1989" },
    { question: "Wie nennst du ein männliches Schwein?", answer: "Eber" },
    { question: "Wie heißen die besten Freunde von „Harry Potter“?", answer: "Hermine Granger und Ron Weasley" },
    { question: "Wie viele Oscars gewann der Film 'Titanic'?", answer: "11" },
    { question: "Wofür stehen die olympischen Ringe?", answer: "Für die 5 Kontinente" },
    { question: "Wo ist die spanische Treppe?", answer: "Rom" },
    { question: "Wieviele Elemente gibt es im Periodensystem?", answer: "118" },
    { question: "Wer komponierte ‚Die Zauberflöte‘?", answer: "Wolfgang Amadeus Mozart" },
    { question: "Wie viel Prozent der Erde sind von Wasser bedeckt?", answer: "Ungefähr 70%" },
    { question: "Wie heißt die Hauptstadt von Vietnam?", answer: "Hanoi" },
    { question: "Welches Element hat die Bezeichnung Fe?", answer: "Eisen" }
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
