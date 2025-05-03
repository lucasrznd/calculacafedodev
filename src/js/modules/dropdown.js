export function initDropdown() {
    const select = document.getElementById('cupSize');
    const selectContainer = select.closest('.custom-select');

    // Adiciona classes para estilização baseada no estado
    select.addEventListener('focus', function () {
        selectContainer.classList.add('select-focused');
    });

    select.addEventListener('blur', function () {
        selectContainer.classList.remove('select-focused');
    });

    // Detecta quando uma opção é selecionada para atualizar o visual
    select.addEventListener('change', function () {
        if (this.value) {
            selectContainer.classList.add('has-value');
        } else {
            selectContainer.classList.remove('has-value');
        }
    });

    // Inicializa o estado se já houver um valor
    if (select.value) {
        selectContainer.classList.add('has-value');
    }
}