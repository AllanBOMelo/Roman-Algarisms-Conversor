const romanList = [
    {roman: 'I', arabic: 1},
    {roman: 'V', arabic: 5},
    {roman: 'X', arabic: 10},
    {roman: 'L', arabic: 50},
    {roman: 'C', arabic: 100},
    {roman: 'D', arabic: 500},
    {roman: 'M', arabic: 1000}
]

function ConversorToArabic (input) {
    /* Tratamento de input */
    let ifError = document.getElementById('ifError');

    if (!input) {
        ifError.innerHTML = 'Insira um valor.';
        return '...'
    }

    if (!isNaN(input)) {
        ifError.innerHTML = 'O número inserido não é um algarismo romano. Tente novamente.';
        return '...'
    }

    /* Tratamento de input Fim */

    ifError.innerHTML = '...';
    let value = input.toString();
    let result = 0;
    let array = [];

    for (let i = 0; i < value.length; i++) {

        for (let y = 0; y < romanList.length; y++) {
            if (value[i] === romanList[y].roman) {
                array.push(romanList[y].arabic)
            }
        }

    }

    /* MMMCMXCVIII */
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