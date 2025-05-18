function calculateSum(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }

    sum = 0;
    for (j = 0; j < numbers.length; j++) {
        const value = numbers[j];
        if (typeof value !== 'number' || isNaN(value)) {
            continue;
        }
        sum += value;
        console.log("Index:", j, "Value:", value, "Current Sum:", sum);
    }

    console.log("Final Sum:", sum);
    return sum;
}

const data1 = [10, 20, "30", 40, NaN, 50];
const result1 = calculateSum(data1);
console.log("Result 1:", result1);

const data2 = "Not an array";
const result2 = calculateSum(data2);
console.log("Result 2:", result2);

