//โจทย์ให้ทำฟังก์ชัน simpleArraySum รับค่า  arr  ก้อนนึง
function simpleArraySum(ar) {
  const countlength = ar.length; //ประกาศค่านึงใช้นับจำนวน arry ว่ามีขนาด length เท่ากับเท่าไหร่ แล้วเราจะหยุดบวกค่านี้เมื่อไหร่[1, 2, 4, 8, 9, 6]
  let a = 0; //ประกาศค่า a เพื่อใช้ในการรับค่าที่ได้จากการ loop โดยให้ค่านั้นเริ่มจาก 0 ก่อน
  for (let i = 0; i < countlength; i++) {
    // สร้างลูปหาค่า i ที่เราก็ไม่รู้ว่าจะถูกแทนด้วยอะไร โดยให้เงื่อนไขค่า i มีค่าเท่ากับ 0 น้อยกว่าค่า length ที่ได้จากด้านบน i เพิ่มขึ้นทีละ +1
    a = ar[i] + a; // ประกาศตัวแปรไว้รับค่าใน arr แล้วบวกด้วยค่า a ที่ได้จาก loop
  }
  return a;
}
console.log(simpleArraySum([1, 2, 4, 8, 9, 6])); // ฟังก์ชันรับค่าก้อนนี้ ตอนทำงานคือ เอาแต่ละตำแหน่งมาบวกกัน  [1, 2, 4, 8, 9, 6]

const sumArr = simpleArraySum([1, 2, 4, 8, 9, 6]); //สร้างตัวแปรมารับค่าฟังก์ชันก่อนค่อยปริ้น
console.log(sumArr);

//ตัวอย่างการทำงานใน loop คือ
// a ครังแรกก่อนเข้า loop เริ่มจาก 0
// เข้า loop 0 = 1+0 จากนั้น ค่า a จะเปลี่ยนเป็น 1 เพราะมันจะลูปต่อตรงเงื่อนไข i
// เข้า loop 1 = 2+1 จากนั้นเหมือนบรรทัดบน
// เข้า loop 3 = 4+3 จากนั้นเหมือนบรรทัดบน
// เข้า loop 7 = 8+7 จากนั้นเหมือนบรรทัดบน
// เข้า loop 15 = 9+15 จากนั้นเหมือนบรรทัดบน
// เข้า loop 24 = 6+26 จากนั้นเหมือนบรรทัดบน   จบที่ 30
