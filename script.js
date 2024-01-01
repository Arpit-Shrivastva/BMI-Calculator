
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    const BMI_result = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>Result is : ${BMI_result}</span>`;
})