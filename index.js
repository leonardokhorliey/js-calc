let repeat;

function addition(result = '') {
    let sums = result || 0;
    let count = result ? 1 : 0;

    while (true) {
        number = prompt(count >= 1 ? 'Enter the next number to add. \n Press \'Enter\' if you do not want to enter another number: ' : 'Enter the first number to add: ');
        if (!number) break;
        try {
            number = parseFloat(number);
        } catch (e) {
            alert("You made an invalid input. Try again.")
            continue;
        }

        sums += number;
        count += 1;
    }

    return sums;
}

function subtraction (result = '') {
    let numbersToSub = result ? [result] : [];
    let count = result ? 1 : 0;

    while (true) {
        number = prompt(count >= 1 ? 'Enter the number to subtract. \n Press \'Enter\' if you do not want to enter another number: ' : 'Enter the number to subtract from: ');
        if (!number) break;
        try {
            number = parseFloat(number);
        } catch (e) {
            alert("You made an invalid input. Try again.")
            continue;
        }

        numbersToSub.push(number);
        count += 1;
        if (count === 2) break;
    }

    return numbersToSub[0] - numbersToSub[1];
}

function multiply (result= '') {
    let solution = result || 1;
    let count = result ? 1 : 0;

    while (true) {
        number = prompt(count >= 1 ? 'Enter the next number to multiply. \n Press \'Enter\' if you want to default to one: ' : 'Enter the first number to multiply : ');
        if (!number) break;
        try {
            number = parseFloat(number);
        } catch (e) {
            alert("You made an invalid input. Try again.")
            continue;
        }

        solution *= number;
        count += 1;
        if (count === 2) break;
    }

    return solution;
}

function division (result= '') {
    let numbersToDivide = result ? [result] : [];
    let count = result ? 1 : 0;

    while (true) {
        number = prompt(count >= 1 ? 'Enter the number to divide by. \n Press \'Enter\' if you want to default to one: ' : 'Enter the number to divide: ');
        if (!number) break;
        try {
            number = parseFloat(number);
        } catch (e) {
            alert("You made an invalid input. Try again.")
            continue;
        }

        numbersToDivide.push(number);
        count += 1;
        if (count === 2) break;
    }

    return numbersToDivide[0]/numbersToDivide[1];
}

function entry () {
    

    while (true) {
        // Get any previously compute result
        const prevResult = parseFloat(localStorage.getItem('js-calc'));
        let options;

        const FUNCTIONS = {
            "a": addition,
            "s": subtraction,
            "m": multiply,
            "d": division
        }

        if (repeat === undefined) alert("Welcome to js-calc.");

        if (!isNaN(prevResult)) {
            console.log(prevResult);
            options = prompt('Use previous result? (Y/N): ').toLowerCase();
            
            while (!['y', 'n'].includes(options)) {
                alert('Invalid Selection. Try again.');
                options = prompt('Use previous result? (Y/N): ').toLowerCase();
            }
        }

        choice = prompt("\nWhat would you like to do? \n A - Add \n S - Subtract \n M - Multiply \n D - Divide \n").toLowerCase();

        if (['a', 's', 'm', 'd'].includes(choice)) {
            let result = FUNCTIONS[choice](options == 'y' ? prevResult : '');
            localStorage.setItem('js-calc', result.toString());
            alert('Your result is ' + result);
        } else {
            alert("You made an invalid selection.Try again");
            continue
        }

        repeat = prompt('Do you want to do another calculation? (Y/N): ').toLowerCase();

        while (!['y', 'n'].includes(repeat)) {
            alert('Invalid Selection. Try again.');
            repeat = prompt('Do you want to do another calculation? (Y/N): ').toLowerCase();
        }

        if (repeat === 'y') continue;

        alert("Thank you for trying out my calculator.");
        break;
    }
}   


setTimeout(entry, 3000)