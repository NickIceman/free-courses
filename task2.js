/* Task 2 */

let userNum = +prompt("Введите число от -10000 до 10000 включительно");

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
    alert(userNum);
} else alert("Неверный ввод данных!");

process.stdout.write("Fn: " + fib(userNum))
