/* Task 1 */

function isPalindrome(str) {
    let strLen = str.length;
    let result = '';
    for (let i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) { //Сравниваем все элементы от начала строки со всеми элементами с конца строки
        result = 'YES';
      } else {
        result = 'NO';
        return result;
      }
    }
    return result;
  }

  test = isPalindrome('abcdedcba');
  test2 = isPalindrome('abcded');

  console.log(test);
  console.log(test2);
  process.stdout.write('isPalindrome result: ' + 'str - ' + test + ' str2 - ' + test2)
