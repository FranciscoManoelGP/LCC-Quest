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
    
    //Criar barra de progresso
    if (!section) {
        resultSpan.textContent = `Overall: ${allPercentage.toFixed(2)}`;
    }

}