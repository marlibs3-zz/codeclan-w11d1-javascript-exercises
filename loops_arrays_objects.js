var sports = ['football', 'tennis', 'rubgy'];

var firstSport = sports[0];

console.log('first sport:', firstSport);
console.log('second sport:', sports[1]);

sports.push('snooker');
sports.push('darts');

console.log('sports:', sports);

var finalIndexPos = sports.length - 1;

var lastSport = sports[finalIndexPos];

console.log(lastSport);
