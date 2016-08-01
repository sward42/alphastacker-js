/*  Create a stackLetters function that should console.log rows of letters. It should take an array containing the letters of the alphabet and output them like this:

a
ab
abc
abcd
abcde
abcdef
etc
Then add logic to stackLetters that places a space after every fifth letter, like this:

a
ab
abd
abcd
abcde
abcde f
etc

*/

var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphaAdd = "";
var stacker = "";

//console.log(alpha.splice(5, 0, " "));


for (var i = 0; i < alpha.length; i++) {
	if((i+1) % 6 === 0) {
		alpha.splice(i,0," ");
	}
}

//console.log(alpha);

for (var i = 0; i < alpha.length; i++) {
	alphaAdd = alpha.slice(0, i);
	stacker = alphaAdd.toString();
	console.log(stacker);
}




	

/*
	console.log(alphaAdd = alpha[0]);
	console.log(alphaAdd += alpha[1]);
	console.log(alphaAdd += alpha[2]);
	console.log(alphaAdd += alpha[3]);
*/
