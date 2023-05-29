const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const resultSpan = document.getElementById('result');
const sections = document.querySelectorAll('.sec');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        updateSubjectCounts(null); // Chamada da função para contabilização geral
    });
});

sections.forEach(section => {
    const sectionCheckboxes = section.querySelectorAll('input[type="checkbox"]');

    sectionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateSubjectCounts(section); // Chamada da função para contabilização por seção
        });
    });
});