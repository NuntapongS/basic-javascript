// 2. References
// 2.1 ช้ const สำหรับค่าคงที่ และหลีกเลี่ยงการใช้ var
// เพราะว่าการใช้งาน const จะทำให้เราไม่สามารถเปลี่ยนแปลงค่าได้อีก ซึ่งป้องกันข้อผิดพลาดต่างๆ ที่อาจจะเกิดขึ้น (ในกรณีที่เราลืมไปเปลี่ยนแปลงค่าของตัวแปร หรือมีไลบรารี่อื่นๆ ที่เราใช้มาเปลี่ยนแปลงค่าตัวแปรของเรา)

// Bad 👎
var a = 1;
var b = 2;
console.log(a, b); // 1, 2
a = 4;
console.log(a, b); // 4, 2

// Good 👍
const c = 1;
const d = 2;
console.log(c, d); // 1, 2

// 2.2 ถ้าต้องการตัวแปรที่เปลี่ยนแปลงค่าได้ให้ใช้ let และหลีกเลี่ยงการใช้ var เพราะว่า let จะมีค่าอยู่แค่ในปีกกาที่ประกาศ (Block-scoped) ซึ่งไม่เหมือน var ที่มีค่าอยู่ในฟังก์ชันที่ประกาศ (Function-scoped)

