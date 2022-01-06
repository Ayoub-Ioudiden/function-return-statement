const check = function (number) {
    const sum = number;
    if (sum > 100) {
        return "True";
    }
    return "False";
};

const result = check(99);
console.log(result);



const getBouncerReaction = function (
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) {
        return "this is a club for adults";
    }

    if (currentVisitors >= maxVisitors) {
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
};

console.log(getBouncerReaction(2000, 0, 15));

console.log(getBouncerReaction(2000, 1999, 50));

console.log(getBouncerReaction(2000, 2000, 40));

console.log(getBouncerReaction(2000, 2999, 30));


const calculateAverage = function (
    number1,
    number2,
    number3,
    number4,
    number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(calculateAverage(1, 1, 1, 1, 1));

console.log(calculateAverage(1, 2, 3, 4, 5));

console.log(calculateAverage(-10000, 0, 0, 0, 5000));










