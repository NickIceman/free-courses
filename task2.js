/* Task 2 */

let userNum = process.argv[2];

if ((userNum > 0) && (userNum <= 10000)) {

    function fib(n) {

        if (n == 1 || n == 2) return 1;

        else return fib(n - 1) + fib(n - 2);
    }

} else if ((userNum < 0) && (userNum >= -10000)) {

    function fib(n) {

        if (n == 1 || n == 2) return 1;

        else return fib(n + 2) - fib(n + 1);
    }
    
} else if (userNum === 0) {
    
    function fib(n) {return 0}
    
} else console.log("Неверный ввод данных!");

console.log(fib(userNum))
