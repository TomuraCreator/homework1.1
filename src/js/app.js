'use strict';

let costs = [523, 569, 324, 23, 58, 100, 900, 711, 523, 569, 324, 23, 58, 100, 900, 711, 23, 58, 100, 900, 711, 523, 569, 324, 23, ];
let val;
let sum = 0;
window.onload = function () {
    for (val of costs) {
        sum = val + sum;
        let mod = sum % 10;
        if (mod === 1) {
            console.log(mod);
            console.log(`Вы пополнили счет на сумму: ${val}. Ваш баланс: ${sum} балл.\n\n\n `);
        }
        else if (mod === 0 || mod === 5 || mod === 6 || mod === 7 || mod === 8 || mod === 9) {
            console.log(mod);
            console.log(`Вы пополнили счет на сумму: ${val}. Ваш баланс: ${sum} баллов.\n\n\n `);
        }
        else if (mod === 2 || mod === 3 || mod === 4) {
            console.log(mod);
            console.log(`Вы пополнили счет на сумму: ${val}. Ваш баланс: ${sum} балла.\n\n\n `);
        }
    }
};
