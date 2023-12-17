const form = document.querySelector('form')

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    console.log(height,weight);
    const result = document.querySelector('#result');

    if (height <= 0 || isNaN(height) || height === '') {
        result.innerHTML = `Please enter a valid height ${height}`
    } else if(weight <= 0 || isNaN(weight) || weight === ''){
        result.innerHTML = `Please enter a valid weight ${weight}`
    } else{
        const bmi = (weight/((height * height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
});