const calculateButton = document.getElementById("calculate_button");
const results = document.getElementById("results");
const distanceInput = document.getElementById("distance_input");
const electricityInput = document.getElementById("electricity_input");
const wasteInput = document.getElementById("waste_input");
const mealsInput = document.getElementById("meals_input");
const transportationEmissions = document.getElementById("transportation_emissions");
const electricityEmissions = document.getElementById("electricity_emissions");
const dietEmissions = document.getElementById("diet_emissions");
const wasteEmissions = document.getElementById("waste_emissions");
const totalEmissions = document.getElementById("total_emissions");
const countrySelect = document.getElementById("country_input");







const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const valueElement = slider.nextElementSibling;
        slider.addEventListener('input', () => {
            valueElement.textContent = slider.value;
        });
    });

calculateButton.addEventListener("click", () => {
    results.style.display = "block";

    const distance = parseFloat(distanceInput.value) * 365;
    const electricity = parseFloat(electricityInput.value) * 12;
    const meals = parseFloat(mealsInput.value) * 365;
    const waste = parseFloat(wasteInput.value) * 52;

    const EMISSION_FACTORS = {
        "Rwanda": {
            "Transportation": 0.14,  // kgCO2/km
            "Electricity": 0.82,  // kgCO2/kWh
            "Diet": 1.25,  // kgCO2/meal, 2.5kgco2/kg
            "Waste": 0.1  // kgCO2/kg
        }
    };

    const country = countrySelect.options[countrySelect.selectedIndex].value;

    const transportation_emissions = (EMISSION_FACTORS[country]["Transportation"] * distance) / 1000;
    const electricity_emissions = (EMISSION_FACTORS[country]["Electricity"] * electricity) / 1000;
    const diet_emissions = (EMISSION_FACTORS[country]["Diet"] * meals) / 1000;
    const waste_emissions = (EMISSION_FACTORS[country]["Waste"] * waste) / 1000;

    transportationEmissions.innerText = `🚗 Transportation: ${transportation_emissions.toFixed(2)} tonnes CO2 per year`;
    electricityEmissions.innerText = `💡 Electricity: ${electricity_emissions.toFixed(2)} tonnes CO2 per year`;
    dietEmissions.innerText = `🍽️ Diet: ${diet_emissions.toFixed(2)} tonnes CO2 per year`;
    wasteEmissions.innerText = `🗑️ Waste: ${waste_emissions.toFixed(2)} tonnes CO2 per year`;
    totalEmissions.innerText = `🌍 Your total carbon footprint is: ${(transportation_emissions + electricity_emissions + diet_emissions + waste_emissions).toFixed(2)} tonnes CO2 per year`;
});