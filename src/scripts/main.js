'use strict';

const population = document.querySelectorAll('.population');

let totalPopulation = 0;
const populations = [];

population.forEach((node) => {
  const value = Number(node.textContent.replace(/,/g, ''));

  totalPopulation += value;
  populations.push(value);
});

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

const averagePopulation = totalPopulation / populations.length;

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.textContent =
  Math.round(averagePopulation).toLocaleString('en-US');
