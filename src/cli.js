import readlineSync from 'readline-sync';

export default function gretting() {
	console.log("Welcome to the Brain Games!");
	const username = readlineSync.question("May I have your name?");
	console.log(`Hello, dear ${username}!`);
}