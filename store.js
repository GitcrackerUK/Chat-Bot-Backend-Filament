const welcome = {
    greet: 'Welcome, how can I assist you ? Please select one of following options.',
    1: "I'm looking for a new car",
    2: "I'm looking for a used car",
    3: "I need help with deciding what's best for me",
    4: 'Promotions',
    5: 'Technical support ',
};
const opt1 = {
    choice: "I'm looking for a new car",
    1: 'Will it be for you self ?',
    2: 'What brand do you prefer?',
    3: 'Is there any particularly color you prefer?',
    4: 'Will you be paying in cash ?',
    5: 'Will you prefer car finance ?',
};
const opt2 = {
    choice: "I'm looking for a used car",
    1: opt1[1],
    2: opt1[2],
    3: opt1[3],
    4: opt1[4],
    5: opt1[5],
    6: 'How old should be a car ?',
    7: 'What is you budget ?',
};
const opt3 = {
    choice: "I need help with deciding what's best for me",
    1: {
        q: 'How much do you think car will be used ?',
        1: 'Everyday',
        2: 'Sometimes',
    },
    2: {
        q: 'Will you use a car to commute?',
        1: 'yes',
        2: 'nope',
    },
    3: {
        q: 'What kind of car do you prefer?',
        1: 'Sedan',
        2: 'Estate',
        3: 'Convertible',
    },
};

const opt4 = {
    choice: 'Promotions',
    1: '20% discount for smart',
    2: 'Low interest rate till tomorrow',
    3: "New mot on used mazda's",
    4: 'buy today, pay next year',
};

const opt5 = {
    choice: 'Technical support',
    1: 'Account support',
    2: 'Car support',
    3: 'Other',
};

exports.welcome = welcome;
exports.opt1 = opt1;
exports.opt2 = opt2;
exports.opt3 = opt3;
exports.opt4 = opt4;
exports.opt5 = opt5;
