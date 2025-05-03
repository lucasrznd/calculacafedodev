import { initCoffeeCalculator } from "./modules/coffeeCalculator.js";
import { initDropdown } from "./modules/dropdown.js";

// Inicializando os módulos
document.addEventListener('DOMContentLoaded', () => {
    initCoffeeCalculator();
    initDropdown();
});