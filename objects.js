// Objects
// 3.1 ควรใช้ปีกกา {} ในการประกาศออบเจ็กต์

// Bad 👎
const item = new Object();

// Good 👍
const item = {};

// 3.2 อย่าใช้คำสงวนเป็นคีย์เพราะมันจะใช้ไม่ได้ใน IE8. แต่ถ้าเราสร้างโมดูลของตัวเองก็สามารถใช้คำเหล่านี้ได้

// Bad 👎
const superman = {
  default: { clark: "kent" }, // default เป็นคำสงวน
  private: true,
};

// Good 👍
const superman = {
  defaults: { clark: "kent" },
  hidden: true,
};

// 3.3 ใช้คำที่มีความหมายเหมือนกันแทนคำสงวน

// Bad 👎
const superman = {
  class: "alien", // class เป็นคำสงวน
};

// Bad 👎
const superman = {
  klass: "alien", // แปลงคำไม่ใช่สิ่งดี เพราะจะทำให้เดาความหมายได้ยาก
};

// Good 👍
const superman = {
  type: "alien",
};

// 3.4 ถ้าต้องการสร้างพรอพเพอร์ตี้ของออบเจ็กต์จากตัวแปร (Dynamic property) ให้สร้างตอนที่ประกาศออบเจ็กต์โดยใช้ [] เพราะจะทำให้พรอพเพอร์ตี้ทั้งหมดถูกสร้างไว้ในที่เดียว ซึ่งทำให้ดูได้ง่ายกว่าการสร้างแยกกัน

function getKey(k) {
  return `a key named ${k}`;
}

// Bad 👎
const obj = {
  id: 5,
  name: "San Francisco",
};
obj[getKey("enabled")] = true; // สร้างหลังจากประกาศออบเจ็กต์เสร็จแล้ว ทำให้มองยากกว่า

// Good 👍
const obj = {
  id: 5,
  name: "San Francisco",
  [getKey("enabled")]: true, // สร้างตอนประกาศออบเจ็กต์ ทำให้มองเห็นพรอพเพอร์ตี้ของออบเจ็กต์ทั้งหมดในที่เดียว
};

// 3.5 สร้างเมท็อตโดยใช้วิธีการประกาศแบบย่อ (Object method shorthand)

// Bad 👎
const atom = {
  value: 1,

  addValue: function (value) {
    // การประกาศแบบปกติ
    return atom.value + value;
  },
};

// Good 👍
const atom = {
  value: 1,

  addValue(value) {
    // การประกาศแบบย่อ ซึ่งตัดคีย์เวิร์ดฟังก์ชันออกไป ทำให้โค้ดอ่านง่ายขึ้น
    return atom.value + value;
  },
};

// 3.6 สร้างพรอพเพอร์ตี้โดยใช้วิธีการประกาศแบบย่อ (Property value shorthand) เพราะว่าทำให้อ่านง่ายขึ้น และเข้าใจได้ง่ายกว่า

const lukeSkywalker = "Luke Skywalker";

// Bad 👎
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// Good 👍
const obj = {
  lukeSkywalker, // มีค่าเท่ากับด้านบนเพียงแต่ทำให้อ่านง่ายขึ้น (ถ้าต้องการให้ชื่อตัวแปรและชื่อพรอพเพอร์ตี้ต่างกัน ต้องใช้วิธีการประกาศแบบด้านบน)
};

// 3.7 พรอพเพอร์ตี้ที่ประกาศโดยใช้วิธีการประกาศแบบย่อ ให้ใส่ไว้ด้านบนสุดของการประกาศออบเจ็กต์เพราะทำให้รู้ได้ว่าพรอพเพอร์ตี้ใด ที่ประกาศโดยใช้วิธีการประกาศแบบย่อ

const anakinSkywalker = "Anakin Skywalker";
const lukeSkywalker = "Luke Skywalker";

// Bad 👎
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// Good 👍
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
