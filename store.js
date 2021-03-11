const welcome = {
    greet: 'Welcome, how can I assist you ? Please select one of following options.',
    1: "I'm looking for a new car",
    2: "I'm looking for a used car",
    3: "I need help with deciding what's best for me",
    4: 'Promotion',
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

exports.welcome = welcome;
exports.opt1 = opt1;
exports.opt2 = opt2;
