


//Code for Leap Year Usinf If Else:-

var year = 2004;

if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
    console.log('This is Leap Year');
    
} else {
     console.log("This is not leap year");
}


//Palindrome or not

function validatePalin(str) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            alert( 'It is not a palindrome');
        }
    }
    alert( 'It is a palindrome');
}
const string = prompt('Enter a string or number: ');
const value = validatePalin(string);
console.log(value);
