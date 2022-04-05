import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counter = 0;
for (let i = 0; i <= 2; i++) {
	let qNum = (Math.floor(Math.random() * 100) + 1);
	let tf = qNum % 2 === 0 ? 1 : 0;
	let crAns = tf === 1 ? 'yes' : 'no';
	console.log(`Question: ${qNum}`);
	const ans = readlineSync.question('Your answer:');
	if (tf === 1 && ans === 'yes') || (tf === 0 && ans === 'no') {
		console.log('Correct!');
		counter++;
	} else {
		console.log(`'${ans}' is wrong answer ;(. Correct answer was '${crAns}'`)
		return ("Let's try again!");
	}
}
