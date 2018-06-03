/* Task 3 */
let str = process.argv[2];
a = str.replace(/[^qeyuioa]/ig, '');
b = str.replace(/[^wrtpsdfghjklzxcvbnm]/ig, '');
c = str.replace(/[^\d]/g, '');
process.stdout.write(a + " " + b + " " + c)
