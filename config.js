// Cấu hình Firebase cho Website Tiếng Việt 5
// Bạn chỉ cần điền 4 thông số lấy từ Firebase Console vào giữa hai dấu ngoặc kép bên dưới:

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC_QXiBu9DDbJzkO_vvKAi-P-XpdvNMEXA",       
  authDomain: "grade-5-80a38.firebaseapp.com",   
  projectId: "grade-5-80a38",   
  appId: "1:864180227390:web:426d51862b9194a601706f"          
};

// Cấu hình hiển thị
const APP_SETTINGS = {
  collectionName: "stats_tv5", // Tên bộ đếm trên Firestore (tách riêng với các môn khác)
  hienThiToiThieu: 1            // Chỉ hiển thị số khi lượt xem/tải đạt mức này trở lên
};
