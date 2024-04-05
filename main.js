function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Example usage:
const age = 15;
const ticketPrice = calculateTicketPrice(age);
console.log("The ticket price for age " + age + " is $" + ticketPrice);

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
const n = 6;
console.log("The " + n + "th Fibonacci number is: " + fibonacci(n));

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        // Recursively check the substring without the first and last characters
        return isPalindrome(str.substring(1, str.length - 1));
    }
}

// Example usage:
const string1 = "A man, a plan, a canal, Panama!";
const string2 = "racecar";
console.log(string1 + " is a palindrome: " + isPalindrome(string1));
console.log(string2 + " is a palindrome: " + isPalindrome(string2));