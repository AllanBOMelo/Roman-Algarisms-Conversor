/* Lista Romana */
const lessTen = [
    {arabic: 9, roman: 'IX'},
    {arabic: 5, roman: 'V'},
    {arabic: 4, roman: 'IV'},
    {arabic: 1, roman: 'I'}
];

const upperTen = [
    {arabic: 90, roman: 'XC'},
    {arabic: 50, roman: 'L'},
    {arabic: 40, roman: 'XL'},
    {arabic: 10, roman: 'X'}
];

const upperHundred = [
    {arabic: 900, roman: 'CM'},
    {arabic: 500, roman: 'D'},
    {arabic: 400, roman: 'CD'},
    {arabic: 100, roman: 'C'}
];

const upperThousand = [
    {arabic: 1000, roman: 'M'}
]

/* Lista Romana Fim */

function ConversorToRoman (input) {

    /* Tratamento de input */
    let ifError = document.getElementById('ifError');

    if (!input) {
        ifError.innerHTML = 'Insira um valor.';
        return '...'
      }

    if (isNaN(input)) {
        ifError.innerHTML = 'O número inserido não é um número. Tente novamente.';
        return '...'
    }

    if (parseInt(input) > 3999) {
        ifError.innerHTML = 'Por favor. Insira somente números abaixo de 3999.';
        return '...'
    }

    /* Tratamento de input Fim */

    ifError.innerHTML = '...';
    let value = parseInt(input);
    let result = "";
    let returned

    while (value != 0) {
        /* Tratamento de acordo com a casa decimal */
        if (value.toString().length === 1) {
            returned = calc(lessTen, value)
            result += returned.roman
            value -= returned.arabic
        }
    
        if (value.toString().length === 2) {
            returned = calc(upperTen, value)
            result += returned.roman
            value -= returned.arabic
        }
   
        if (value.toString().length === 3) {
            returned = calc(upperHundred, value)
            result += returned.roman
            value -= returned.arabic
        }

        if (value.toString().length === 4) {
            returned = calc(upperThousand, value)
            result += returned.roman
            value -= returned.arabic
        }
        /* Tratamento de acordo com a casa decimal Fim */
    }

    return result;
}
    

function calc (array, value) {
    for (let i = 0; i < array.length; i++) {
        if (value >= array[i].arabic) {

            return array[i]

        }
    }
}



export default ConversorToRoman;