/* Task 3 */

let str = 'Hello World 10';
a = str.replace(/[^qeyuioa]/ig, '');
b = str.replace(/[^wrtpsdfghjklzxcvbnm]/ig,'');
c = str.replace(/[^\d]/g,'');
alert(a + " " + b + " " + c);
