// 1. types
// 1.1 Primitives: เมื่อใช้งานตัวแปรพื้นฐาน (ตัวแปรที่อ้างอิงด้วยค่า) สามารถเข้าใช้งานได้โดยอ้างอิงค่าของตัวแปร
// string, number, boolean, null, undefined

const number1 = 1;
let number2 = number1;

number2 = 9;

console.log(number1, number2); // => 1, 9

// 1.2 Complex: เมื่อใช้งานตัวแปรที่มีความซับซ้อน (ตัวแปรที่อ้างอิงไปยังค่าที่อยู่ของตัวแปรอื่น) สามารถเข้าใช้งานได้โดยอ้างอิงค่าที่อยู่ของตัวแปรนั้นๆ
// object, array, function

const number3 = [1, 2];
const number4 = number3;

number4[0] = 9;

console.log(number3[0], number4[0]); // => 9, 9