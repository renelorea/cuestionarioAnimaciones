const quizData = [
    { question: "¿Qué propiedad de CSS se utiliza para aplicar una animación?", options: ["animation", "transition", "transform", "keyframes"], correct: 0 },
    { question: "¿Qué palabra clave en CSS define los pasos de una animación?", options: ["@media", "@keyframes", "@import", "@font-face"], correct: 1 },
    { question: "¿Qué propiedad de CSS define la duración de una animación?", options: ["animation-delay", "animation-duration", "animation-timing-function", "animation-iteration-count"], correct: 1 },
    { question: "¿Qué valor de 'animation-iteration-count' hace que una animación se repita indefinidamente?", options: ["1", "infinite", "loop", "forever"], correct: 1 },
    { question: "¿Qué propiedad de CSS retrasa el inicio de una animación?", options: ["animation-delay", "animation-duration", "animation-timing-function", "animation-fill-mode"], correct: 0 },
    { question: "¿Qué propiedad de CSS controla la aceleración de una animación?", options: ["animation-timing-function", "animation-delay", "animation-duration", "animation-name"], correct: 0 },
    { question: "¿Qué propiedad de CSS especifica el nombre de una animación?", options: ["animation-name", "animation-duration", "animation-delay", "animation-fill-mode"], correct: 0 },
    { question: "¿Qué propiedad de CSS define la dirección de una animación?", options: ["animation-direction", "animation-fill-mode", "animation-iteration-count", "animation-timing-function"], correct: 0 },
    { question: "¿Qué propiedad de CSS define el estado antes y después de una animación?", options: ["animation-fill-mode", "animation-delay", "animation-duration", "animation-name"], correct: 0 },
    { question: "¿Qué valor de 'animation-timing-function' crea una animación con velocidad constante?", options: ["ease", "linear", "ease-in", "ease-out"], correct: 1 },
    { question: "¿Qué evento de JavaScript se dispara al finalizar una animación?", options: ["animationstart", "animationend", "animationiteration", "animationcancel"], correct: 1 },
    { question: "¿Qué método de JavaScript activa una animación CSS?", options: ["element.addClass()", "element.classList.add()", "element.setAttribute()", "element.style.animation()"], correct: 1 },
    { question: "¿Qué propiedad de CSS se usa para transiciones suaves?", options: ["animation", "transition", "transform", "keyframes"], correct: 1 },
    { question: "¿Qué propiedad de CSS rota un elemento?", options: ["rotate", "transform", "animation", "transition"], correct: 1 }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resultText = document.getElementById("result");
const progressBar = document.getElementById("progress-bar");

let answeredQuestions = 0;

quizData.forEach((data, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<h3>${index + 1}. ${data.question}</h3>`;
    
    data.options.forEach((option, optionIndex) => {
        const optionWrapper = document.createElement("div");
        optionWrapper.classList.add("option-wrapper");
        
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question${index}`;
        input.value = optionIndex;
        
        input.addEventListener("change", () => {
            answeredQuestions++;
            progressBar.style.width = `${(answeredQuestions / quizData.length) * 100}%`;
        });

        const label = document.createElement("label");
        label.innerText = option;

        optionWrapper.appendChild(input);
        optionWrapper.appendChild(label);
        questionDiv.appendChild(optionWrapper);
    });

    quizContainer.appendChild(questionDiv);
});

submitBtn.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((data, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === data.correct) {
            score++;
        }
    });

    resultText.innerText = `¡Has obtenido ${score} de ${quizData.length} respuestas correctas! 🎉`;
    resultText.style.animation = "fadeIn 1s ease-in-out";
});
