// Функция сериализации
function serialize(arrayOfNumbers) {
    let bitString = '';
    for (let i = 1; i <= 300; i++) {
        bitString += arrayOfNumbers.includes(i) ? '1' : '0';
    }
    return parseInt(bitString, 2).toString(16);
}

// Функция десериализации
function deserialize(serializedString) {
    let bitString = parseInt(serializedString, 16).toString(2);
    let arrayOfNumbers = [];
    for (let i = 0; i < bitString.length; i++) {
        if (bitString[i] === '1') arrayOfNumbers.push(i + 1);
    }
    return arrayOfNumbers;
}

// Функция для создания случайного массива
function makeRandomArray(length){
    let result = [];
    for(let i=0; i<length; i++){
        result.push(Math.floor(Math.random() * 300) + 1)
    }
    return result;
}

let tests = [
    // массив из 50 случайных чисел
    makeRandomArray(50),
    // массив из 100 случайных чисел
    makeRandomArray(100),
    // массив из 500 случайных чисел
    makeRandomArray(500),
    // массив из 1000 случайных чисел
    makeRandomArray(1000),
    // массив, содержащий числа от 1 до 9
    Array.from({ length: 9 }, (_, i) => i + 1),
    // массив, содержащий числа от 10 до 99
    Array.from({ length: 90 }, (_, i) => i + 10),
    // массив, содержащий числа от 100 до 300
    Array.from({ length: 201 }, (_, i) => i + 100),
    // массив, содержащий 3 экземпляра каждого числа от 1 до 300
    Array.from({ length: 300 }, (_, i) => [i + 1, i + 1, i + 1]).flat()
];

tests.forEach(test => {
    let serialized = serialize(test);
    console.log('Исходные данные:', JSON.stringify(test));
    console.log('Сериализованные данные:', serialized);
    console.log('Сжатие:', JSON.stringify(test).length / serialized.length);
    console.log('---------------------------------------------------')
});
