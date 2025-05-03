export function initCoffeeCalculator() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsContainer = document.getElementById('resultsContainer');

    // Função para formatar valores monetários
    function formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    // Evento de clique no botão calcular
    calculateBtn.addEventListener('click', function () {
        // Obter valores dos inputs
        const currentPrice = parseFloat(document.getElementById('currentPrice').value) || 0;
        const coffeeSize = parseFloat(document.getElementById('coffeeSize').value) || 0;
        const cupSize = parseFloat(document.getElementById('cupSize').value) || 0;
        const bottleSize = parseFloat(document.getElementById('bottleSize').value) || 0;
        const amountMadePerDay = parseFloat(document.getElementById('amountMadePerDay').value) || 0;
        const consumersAmount = parseFloat(document.getElementById('consumersAmount').value) || 1;

        // Validar inputs
        if (currentPrice <= 0 || coffeeSize <= 0 || cupSize <= 0 || bottleSize <= 0 || amountMadePerDay <= 0) {
            alert('Por favor, preencha todos os campos com valores válidos!');
            return;
        }

        // Cálculos
        // Considerando aproximadamente 60g de café para cada litro (1000ml) de água
        const coffeeRatio = 60 / 1000; // 60g por litro
        const coffeePerBottle = bottleSize * coffeeRatio;
        const pricePerGram = currentPrice / coffeeSize;
        const costPerBottle = coffeePerBottle * pricePerGram;
        const cupsPerBottle = bottleSize / cupSize;
        const costPerCup = costPerBottle / cupsPerBottle;

        const totalCostDaily = costPerBottle * amountMadePerDay;
        const costPerPersonDaily = totalCostDaily / consumersAmount;

        const totalCostMonthly = totalCostDaily * 30; // considerando 30 dias no mês
        const costPerPersonMonthly = costPerPersonDaily * 30;

        // Atualizar resultados
        document.getElementById('coffeePerBottle').textContent = coffeePerBottle.toFixed(2) + 'g';
        document.getElementById('costPerBottle').textContent = formatCurrency(costPerBottle);
        document.getElementById('costPerCup').textContent = formatCurrency(costPerCup);
        document.getElementById('costPerPersonDaily').textContent = formatCurrency(costPerPersonDaily);
        document.getElementById('costPerPersonMonthly').textContent = formatCurrency(costPerPersonMonthly);
        document.getElementById('totalCostDaily').textContent = formatCurrency(totalCostDaily);
        document.getElementById('totalCostMonthly').textContent = formatCurrency(totalCostMonthly);

        // Mostrar resultados
        resultsContainer.style.display = 'block';

        // Rolar para os resultados
        resultsContainer.scrollIntoView({ behavior: 'smooth' });

        // Registro de análise (aqui você poderia adicionar analytics)
        console.log('Cálculo realizado:', {
            pricePerGram,
            coffeePerBottle,
            costPerBottle,
            costPerCup,
            costPerPersonDaily,
            costPerPersonMonthly,
            totalCostDaily,
            totalCostMonthly
        });
    });

    // Validação em tempo real dos inputs
    const numericInputs = document.querySelectorAll('input[type="number"]');
    numericInputs.forEach(input => {
        input.addEventListener('input', function () {
            if (this.value < 0) this.value = 0;
        });
    });
}