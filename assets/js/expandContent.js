const subjects = document.querySelectorAll('.materia');
const explain = document.getElementById('explain');
const closeButton = explain.querySelector('.close');
const explainContent = explain.querySelector('.explain_content');

subjects.forEach(subject => {
    const checkbox = subject.querySelector('input[type="checkbox"]');
    const explanation = subjectList[subject.id];

    subject.addEventListener('click', (event) => {
        if (event.target !== checkbox) {
            showExplanation(explanation);
        }
    });

});

closeButton.addEventListener('click', hideExplanation);

function showExplanation(explanation) {

    explainContent.querySelector('h3').textContent = explanation.title;
    explainContent.querySelector('p').textContent = explanation.content;

    explain.classList.add('show');
}

function hideExplanation() {
    explain.classList.remove('show');
}