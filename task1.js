/* Task 1 */

const str = process.argv[2];

function palindrome(str) {
    let removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let checkPalindrome = removeChar.split('').reverse().join('');
    return (removeChar === checkPalindrome);
}

if (palindrome(str) === true) {
    process.stdout.write("YES")
} else {
    process.stdout.write("NO")
}
