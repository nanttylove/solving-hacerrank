// โจทย์ให้ลองเปรียบเทียบ คะแนน 2 ชุด ถ้าในแต่ละชุดตำแหน่งเดียวกัน อันไหนเยอะกว่าจะได้คะแนน 1 คะแนน
function compareTriplets(a, b) {
  let score = [0, 0]; // สร้างตัวแปรไว้รับคะแนนของ a b

  // สร้าง loop หาค่า i ว่ามีขนาดอะไร เพื่อที่จะทำให้เรามีตัวเริ่มและจบ ว่าจะหยุดตอนไหน
  for (let i = 0; i < a.length; i++)
    // ดูว่า a มากกว่า b ไหม ถ้ามากกว่า score +1  ถ้า a น้อยกว่า b+1
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : "";
  return score;
}

console.log(compareTriplets([1, 5, 3, 4], [9, 6, 1, 9])); // ฟังก์ชันรับค่าก้อนนี้ ตอนทำงานคือ เอาแต่ละตำแหน่งมาเทียบกันเพื่อลงคะแนน

const totalScore = compareTriplets([1, 5, 3, 4], [9, 6, 1, 9]); // รับค่าในฟังก์ชันก่อนค่อยปริ้น
console.log(totalScore);

//ตัวอย่างการทำงานใน loop i เริ่มจาก 0 และน้อยกว่า length จากก้อน arr length = 4
// score เริ่มจาก ตำแหน่งแรก [0,0]
// a[1],b[9] ได้ b > a จะได้ score b+1   เก็บค่าไว้ตอนนี้ score = [0,1]
// a[5],b[6] ได้ b > a จะได้ score b+1   เก็บค่าไว้ตอนนี้ score = [0,2]
// a[3],b[1] ได้ a > b จะได้ score a+1   เก็บค่าไว้ตอนนี้ score = [1,2]
// a[4],b[9] ได้ b > a จะได้ score b+1   เก็บค่าไว้ตอนนี้ score = [1,3]
