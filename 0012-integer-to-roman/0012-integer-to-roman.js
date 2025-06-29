/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
        const ones  = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
        const tens  = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
        const hrns  = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
        const ths = ["","M","MM","MMM"];
        return `${ths[parseInt(num/1000)] || ''}${hrns[parseInt(num % 1000 / 100)] || ''}${tens[parseInt(num % 100 / 10)] || ''}${ones[num % 10]}`
};