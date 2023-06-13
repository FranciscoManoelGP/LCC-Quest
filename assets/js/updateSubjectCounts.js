function updateSubjectCounts(section) {
    let allChecked = 0;
    let totalCount = checkboxes.length;

    if (section) {
        allChecked = section.querySelectorAll('input[type="checkbox"]:checked').length;
        totalCount = section.querySelectorAll('input[type="checkbox"]').length;
    } else {
        allChecked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    }

    const allPercentage = (allChecked / totalCount) * 100;

    //Chamada da função para barra de progresso

    //Chamada da função para barra de progresso global
    
    if (section) {
        const progressBar = section.querySelector('.progress');
        updateProgressBar(allPercentage, progressBar);
    }else{
        const globalProgressBar = document.querySelector('.global_progress');
        updateProgressBar(allPercentage, globalProgressBar);

    }
}

//Atualizar barras de progresso
function updateProgressBar(progress, progressBar) {
    progressBar.style.width = progress + '%';
    if (progress < 30) {
        progressBar.style.backgroundColor = "red";
    } else if (progress < 70) {
        progressBar.style.backgroundColor = "yellow";
    } else {
        progressBar.style.backgroundColor = "green";
    }
}

function checkAll(section, sectionCheckboxes) {
    //const sectionCheckboxes = section.querySelectorAll('input[type="checkbox"]');
    sectionCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    updateSubjectCounts(section);
    updateSubjectCounts(null); // Chama a função após marcar todas as checkboxes da seção
}