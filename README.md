# basic-javascript

### types

- 1.1 Primitives: เมื่อใช้งานตัวแปรพื้นฐาน(ตัวแปรที่อ้างอิงด้วยค่า)  
  สามารถเข้าใช้งานได้โดยอ้างอิงค่าของตัวแปร

* string
* number
* boolean
* null
* undefined

const number1 = 1;
let number2 = number1;

number2 = 9;

console.log(number1, number2); --> => 1, 9

- 1.2 Complex: เมื่อใช้งานตัวแปรที่มีความซับซ้อน (ตัวแปรที่อ้างอิงไปยังค่าที่อยู่ของตัวแปรอื่น) สามารถเข้าใช้งานได้โดยอ้างอิงค่าที่อยู่ของตัวแปรนั้นๆ

* object
* array
* function

const number3 = [1, 2];
const number4 = number3;

number4[0] = 9;

console.log(number3[0], number4[0]); --> => 9, 9

### References

- 2.1 ใช้ const สำหรับค่าคงที่ และหลีกเลี่ยงการใช้ var
  เพราะว่าการใช้งาน const จะทำให้เราไม่สามารถเปลี่ยนแปลงค่าได้อีก ซึ่งป้องกันข้อผิดพลาดต่างๆ ที่อาจจะเกิดขึ้น (ในกรณีที่เราลืมไปเปลี่ยนแปลงค่าของตัวแปร หรือมีไลบรารี่อื่นๆ ที่เราใช้มาเปลี่ยนแปลงค่าตัวแปรของเรา)

`Bad` 👎
var a = 1;
var b = 2;
console.log(a, b); --> 1, 2
a = 4;
console.log(a, b); --> 4, 2

`Good` 👍
const c = 1;
const d = 2;
console.log(c, d); --> 1, 2

- 2.2 ถ้าต้องการตัวแปรที่เปลี่ยนแปลงค่าได้ให้ใช้ let และหลีกเลี่ยงการใช้ var เพราะว่า let จะมีค่าอยู่แค่ในปีกกาที่ประกาศ (Block-scoped) ซึ่งไม่เหมือน var ที่มีค่าอยู่ในฟังก์ชันที่ประกาศ (Function-scoped)

`Bad` 👎
var count = 1;
if (true) {
count += 1;
}

`Good` 👍
let count = 1;
if (true) {
count += 1;
}

- 2.3 let และ const จะมีค่าอยู่แค่ในปีกกาที่ประกาศ (Block-scoped) เท่านั้น

{
let num1 = 1;
const num2 = 2;
console.log(num1); --> 1 สามารถเรียกใช้งานตัวแปรได้
console.log(num2); --> 2 สามารถเรียกใช้งานตัวแปรได้
}

console.log(num1); --> ReferenceError เมื่อออกนอกปีกกาที่ประกาศจะไม่สามารถเรียกใช้งานตัวแปรได้
console.log(num2); --> ReferenceError เมื่อออกนอกปีกกาที่ประกาศจะไม่สามารถเรียกใช้งานตัวแปรได้
