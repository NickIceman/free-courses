/* Task 1 */

let string = process.argv[1];

function isPalindrome(str) {
    let strLen = str.length;
    let result = '';
    for (let i = 0; i < strLen; i++) {
        if (str[i] === str[strLen - 1 - i])
            result = 'YES';
    } else {
        result = 'NO';
        return result;
    }
}
return result;
}

test = isPalindrome(string);

process.stdout.write(test)
