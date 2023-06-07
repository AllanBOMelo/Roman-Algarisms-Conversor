const romanList = [
    {roman: 'I', arabic: 1},
    {roman: 'V', arabic: 5},
    {roman: 'X', arabic: 10},
    {roman: 'L', arabic: 50},
    {roman: 'C', arabic: 100},
    {roman: 'D', arabic: 500},
    {roman: 'M', arabic: 1000}
]

const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

function ConversorToArabic (input) {
    /* Tratamento de input */
    let ifError = document.getElementById('ifError');

    if (!input) {
        ifError.innerHTML = 'Insira um valor.';
        ifError.classList.value = 'show'
        return 'Resultado'
    }

    if (!isNaN(input)) {
        ifError.innerHTML = 'O número inserido não é um algarismo romano. Tente novamente.';
        ifError.classList.value = 'show'
        return 'Resultado'
    }

    /* Tratamento de input Fim */

    ifError.innerHTML = '...';
    ifError.classList.value = 'ifError'
    let value = input.toString().toUpperCase();
    let result = 0;
    const array = [];
    let match = 0;


    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < romanLetters.length; j++) {
            if (value[i] === romanLetters[j]) {
                match += 1
            }
        }
    }

    if (match !== value.length) {
        ifError.innerHTML = 'O número inserido não é um algarismo romano. Tente novamente.';
        ifError.classList.value = 'show'
        return 'Resultado'
    }

    for (let i = 0; i < value.length; i++) {

        for (let y = 0; y < romanList.length; y++) {
            if (value[i] === romanList[y].roman) {
                array.push(romanList[y].arabic)
            }
        }

    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i])

        if (i-1) {
            
            if (array[i-1] < array[i]) {
                result += parseInt(array[i])
                console.log(result + 'i-1 somando')
                result -= 2*parseInt(array[i-1])
                console.log(result + ' Subtraindo')
            } else {
                result += parseInt(array[i])
                console.log(result + 'somando')
            }

        } else {
            result += parseInt(array[i])
            console.log(result + ' primeiro')
        }
    }

    return result

};

export default ConversorToArabic;