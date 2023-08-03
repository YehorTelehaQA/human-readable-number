module.exports = function toReadable(number) {

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) return 'zero';

    let str = '';

    if (number >= 100) {
        str += ones[Math.floor(number / 100)] + ' hundred';
        number %= 100;
    }

    if (number >= 20) {
        if (str.length > 0) str += ' ';
        str += tens[Math.floor(number / 10)];
        number %= 10;
    }

    if (number >= 10 && number <= 19) {
        if (str.length > 0) str += ' ';
        str += teens[number - 10];
        number = 0;
    }

    if (number >= 1 && number <= 9) {
        if (str.length > 0) str += ' ';
        str += ones[number];
    }

    return str;
}
