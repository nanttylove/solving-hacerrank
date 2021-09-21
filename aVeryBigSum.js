// โจทย์ให้สร้างฟังก์ชันไว้ใช้กับกรณีที่ค่าใน arr มีเยอะมาก ๆ แล้วให้มันบวกกัน ตามชื่อเลย ผลรวมขนาดมหึมา 555
function aVeryBigSum(ar) {
  let a = 0; // ประกาศตัวแปรไว้ ให้เริ่มจาก 0
  //สร้าง loop เหมือนข้ออื่น ๆ เลย คือเก็บ length จะได้รู้จะหยุดการกระทำครั้งนี้เมื่อไหร่
  for (let i = 0; i < ar.length; i++) {
    a = ar[i] + a; //วนทำทีละตัวเหมือนกับ simple เลย
  }
  return a;
}
console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
); // รับแล้วปริ้นเลย ไม่ได้เก็บใส่ตัวแปรก่อนเหมือนข้างล่าง

const totalSum = aVeryBigSum([
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
]); // รับค่าในฟังก์ชันก่อนค่อยปริ้น
console.log(totalSum); // รับค่าในฟังก์ชันก่อนค่อยปริ้น

//ตัวอย่างการทำงานใน loop คือ
// a ครังแรกก่อนเข้า loop เริ่มจาก 0
// เข้า loop 0 = 1000000001+0
// เข้า loop 1000000001 = 1000000002+1000000001
// เข้า loop 2000000003 = 1000000003+2000000003
// เข้า loop 3000000006 = 1000000004+3000000006
// เข้า loop 4000000010 = 1000000005+4000000010  จบที่ a = 5000000015
