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

    //Criar uma logica para mostra semestres completos, meio completo e não feito 
    console.log(`Total Checked ${section ? 'in Section' : 'Overall'}:`, allChecked);
    console.log(`Total Count ${section ? 'in Section' : 'Overall'}:`, totalCount);
    console.log(`Percentage ${section ? 'in Section' : 'Overall'}:`, allPercentage.toFixed(2) + '%');

    if (!section) {
        upadateProgressBar(allPercentage); //Chamada da função de barra de progresso global
    }
}

//Atualizar barra de progresso global
function upadateProgressBar(progress) {
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = progress + '%';
    if (progress < 30) {
        progressBar.style.backgroundColor = "red";
    } else if (progress < 70) {
        progressBar.style.backgroundColor = "yellow";
    } else {
        progressBar.style.backgroundColor = "green";
    }
}

function checkAll(section) {
    const sectionCheckboxes = section.querySelectorAll('input[type="checkbox"]');
    sectionCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    updateSubjectCounts(null); // Chama a função após marcar todas as checkboxes da seção
}