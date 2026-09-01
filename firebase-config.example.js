// 1) คัดลอกไฟล์นี้แล้วเปลี่ยนชื่อเป็น "firebase-config.js"
// 2) ไปที่ Firebase Console > โปรเจกต์ของคุณ > Project settings > General
//    เลื่อนลงมาที่ "Your apps" > เลือกแอปแบบ Web (</>) จะเห็นค่าคอนฟิกด้านล่างนี้ ให้คัดลอกมาแปะแทนของเดิม
// 3) อัปโหลดไฟล์ firebase-config.js ขึ้น GitHub พร้อมกับ index.html (อยู่โฟลเดอร์เดียวกัน)

window.FIREBASE_CONFIG = {
  apiKey: "วางค่า apiKey ของคุณที่นี่",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:xxxxxxxxxxxxxxxxxx"
};
