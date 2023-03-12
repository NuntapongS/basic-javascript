// Arrays
// 4.1 ใช้วงเล็บก้ามปู [] ในการประกาศอาร์เรย์

// Bad 👎
const items = new Array();

// Good 👍
const items = [];

// 4.2 ใช้ฟังก์ชัน Array#push ในการใส่ค่าเข้าไปในอาร์เรย์แทนการใส่ค่าโดยตรง

const someStack = [];

// Bad 👎
someStack[someStack.length] = "abracadabra";

// Good 👍
someStack.push("abracadabra");

// 4.3 ใช้ ... (Spreads) ในการทำสำเนาอาร์เรย์.

// Bad 👎
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// Good 👍
const itemsCopy = [...items];

// 4.4 ใช้ฟังก์ชัน Array#from ในการแปลงอ็อบเจ็กต์เป็นอาร์เรย์

const foo = document.querySelectorAll(".foo");
const nodes = Array.from(foo);
