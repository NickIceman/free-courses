/* Task 3 */
let str = process.argv[2];
a = str.replace(/[^qeyuioaйуеыаоэяию]/ig, '');
b = str.replace(/[^wrtpsdfghjklzxcvbnmбвгджзйклмнпрстфхцчшщ]/ig, '');
c = str.replace(/[^\d]/g, '');
process.stdout.write(a + " " + b + " " + c)
