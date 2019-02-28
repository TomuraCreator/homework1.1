'use strict';

const sumOfValue = (value) => {
    let declination;
        let mod = value % 10;
        if (mod === 1) {
            declination = `балл.`;
        }
        else if (mod === 0 || mod === 5 || mod === 6 || mod === 7 || mod === 8 || mod === 9) {
            declination = `баллов.`;
        }
        else if (mod === 2 || mod === 3 || mod === 4) {
            declination = `балла.`;
        }
        return `${value}${declination}`;
};

const value = 567;
const output = sumOfValue`Ваш баланс: ${value} `;
console.log(output);


