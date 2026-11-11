// Danh sách tài liệu Tiếng Việt 5 - Kết nối tri thức
const DOCS_HK1 = [
  {
    id: "tv5-hk1-chu-diem-1",
    title: "Chủ điểm 1: Thế giới tuổi thơ",
    badge: "HK I",
    desc: "Từ đồng nghĩa, ôn danh từ – động từ – tính từ, kỹ năng kể chuyện sáng tạo.",
    pages: 2,
    file: "pdf/tv5-hk1-chu-diem-1.pdf"
  },
  {
    id: "tv5-hk1-chu-diem-2",
    title: "Chủ điểm 2: Thiên nhiên kì thú",
    badge: "HK I",
    desc: "Từ đa nghĩa, từ ngữ miêu tả qua các giác quan, bài văn tả phong cảnh.",
    pages: 2,
    file: "pdf/tv5-hk1-chu-diem-2.pdf"
  },
  {
    id: "tv5-hk1-chu-diem-3",
    title: "Chủ điểm 3: Trên con đường học tập",
    badge: "HK I",
    desc: "Đại từ, quan hệ từ, cách giới thiệu và cảm nhận nhân vật trong sách.",
    pages: 2,
    file: "pdf/tv5-hk1-chu-diem-3.pdf"
  },
  {
    id: "tv5-hk1-chu-diem-4",
    title: "Chủ điểm 4: Nghệ thuật muôn màu",
    badge: "HK I",
    desc: "Điệp từ – điệp ngữ, công dụng dấu gạch ngang, viết cảm xúc về thơ/truyện.",
    pages: 2,
    file: "pdf/tv5-hk1-chu-diem-4.pdf"
  },
  {
    id: "tv5-hk1-on-tap-tong-hop",
    title: "Ôn tập tổng hợp cuối Học kỳ I",
    badge: "Ôn tập HK I",
    desc: "Hệ thống 12 câu hỏi trắc nghiệm, tự luận và bài viết tổng hợp cuối kỳ I.",
    pages: 1,
    file: "pdf/tv5-hk1-on-tap-tong-hop.pdf"
  },
  {
    id: "tv5-hk1-dap-an",
    title: "Đáp án & Gợi ý tự chấm Học kỳ I",
    badge: "Đáp án HK I",
    desc: "Chi tiết lời giải, gợi ý chấm đọc hiểu, luyện từ và câu kèm thang điểm 10.",
    pages: 1,
    file: "pdf/tv5-hk1-dap-an.pdf"
  },
  {
    id: "tieng-viet-5-hk1-tron-bo",
    title: "Trọn bộ Sổ tay & Bài tập Học kỳ I",
    badge: "Full File HK I",
    desc: "Bản đầy đủ 11 trang gồm cả 4 chủ điểm, bài ôn tập và đáp án gợi ý.",
    pages: 11,
    file: "pdf/tieng-viet-5-hk1-tron-bo.pdf"
  }
];

const DOCS_HK2 = [
  {
    id: "tv5-hk2-chu-diem-1",
    title: "Chủ điểm 1: Vẻ đẹp cuộc sống (Tuần 19-22)",
    badge: "HK II",
    desc: "Câu đơn, câu ghép, các cách nối vế câu ghép, bài văn tả người thân.",
    pages: 2,
    file: "pdf/tv5-hk2-chu-diem-1.pdf"
  },
  {
    id: "tv5-hk2-chu-diem-2",
    title: "Chủ điểm 2: Hương sắc trăm miền (Tuần 23-26)",
    badge: "HK II",
    desc: "Liên kết câu (lặp, nối, thay thế), viết đoạn văn cảm xúc, lập chương trình hoạt động.",
    pages: 2,
    file: "pdf/tv5-hk2-chu-diem-2.pdf"
  },
  {
    id: "tv5-hk2-chu-diem-3",
    title: "Chủ điểm 3: Tiếp bước cha ông (Tuần 28-31)",
    badge: "HK II",
    desc: "Đại từ và kết từ, viết hoa tôn trọng đặc biệt, viết đoạn nêu ý kiến tán thành.",
    pages: 2,
    file: "pdf/tv5-hk2-chu-diem-3.pdf"
  },
  {
    id: "tv5-hk2-chu-diem-4",
    title: "Chủ điểm 4: Thế giới của chúng ta (Tuần 32-34)",
    badge: "HK II",
    desc: "Quy tắc viết tên người/địa lí nước ngoài, dấu gạch ngang, viết đoạn phản đối.",
    pages: 2,
    file: "pdf/tv5-hk2-chu-diem-4.pdf"
  },
  {
    id: "tv5-hk2-on-tap-giua-ky",
    title: "Ôn tập giữa Học kỳ II (Chủ điểm 1–2)",
    badge: "Ôn tập GK II",
    desc: "Hệ thống 8 câu hỏi cốt lõi củng cố kiến thức câu ghép và liên kết câu.",
    pages: 1,
    file: "pdf/tv5-hk2-on-tap-giua-ky.pdf"
  },
  {
    id: "tv5-hk2-on-tap-cuoi-nam",
    title: "Ôn tập tổng hợp cuối năm (Tuần 35)",
    badge: "Ôn tập CK II",
    desc: "Bộ 16 câu hỏi tổng duyệt toàn bộ ngữ pháp học kỳ II kèm đề viết tự chọn.",
    pages: 1,
    file: "pdf/tv5-hk2-on-tap-cuoi-nam.pdf"
  },
  {
    id: "tv5-hk2-dap-an",
    title: "Đáp án & Hướng dẫn tự chấm Học kỳ II",
    badge: "Đáp án HK II",
    desc: "Chi tiết 4 trang giải thích toàn bộ bài tập 4 chủ điểm và ôn tập cuối năm.",
    pages: 4,
    file: "pdf/tv5-hk2-dap-an.pdf"
  },
  {
    id: "tieng-viet-5-hk2-tron-bo",
    title: "Trọn bộ Sổ tay & Bài tập Học kỳ II",
    badge: "Full File HK II",
    desc: "Tài liệu hoàn chỉnh 15 trang tuần 19-35 theo chuẩn sách Kết nối tri thức.",
    pages: 15,
    file: "pdf/tieng-viet-5-hk2-tron-bo.pdf"
  }
];

// Biến lưu trữ Firebase instances
let db = null;
let firestoreModule = null;

// Khởi tạo Firebase SDK từ CDN (bản v10.12.2)
async function initFirebase() {
  if (!FIREBASE_CONFIG || !FIREBASE_CONFIG.projectId || FIREBASE_CONFIG.projectId === "") {
    console.log("Firebase chưa được cấu hình trong config.js. Trang web vẫn hoạt động bình thường ở chế độ tĩnh.");
    return false;
  }

  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const { getFirestore, doc, getDoc, setDoc, updateDoc, increment } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
    
    const app = initializeApp(FIREBASE_CONFIG);
    db = getFirestore(app);
    firestoreModule = { doc, getDoc, setDoc, updateDoc, increment };
    return true;
  } catch (err) {
    console.warn("Không thể tải Firebase SDK:", err);
    return false;
  }
}

// Logic kiểm tra giới hạn tần suất đếm trong localStorage (tránh spam)
function shouldTrack(docId, actionType) {
  const key = `tracked_${docId}_${actionType}`;
  const lastTime = localStorage.getItem(key);
  const now = Date.now();
  const TWELVE_HOURS = 12 * 60 * 60 * 1000;

  if (!lastTime || now - parseInt(lastTime, 10) > TWELVE_HOURS) {
    localStorage.setItem(key, now.toString());
    return true;
  }
  return false;
}

// Tăng số lượt đếm trên Firestore
async function recordInteraction(docId, actionType) {
  if (!db || !firestoreModule) return;
  if (!shouldTrack(docId, actionType)) return;

  const col = APP_SETTINGS.collectionName || "stats_tv5";
  const docRef = firestoreModule.doc(db, col, docId);

  try {
    const docSnap = await firestoreModule.getDoc(docRef);
    if (!docSnap.exists()) {
      await firestoreModule.setDoc(docRef, {
        views: actionType === "view" ? 1 : 0,
        downloads: actionType === "download" ? 1 : 0
      });
    } else {
      const updateData = {};
      updateData[actionType === "view" ? "views" : "downloads"] = firestoreModule.increment(1);
      await firestoreModule.updateDoc(docRef, updateData);
    }
    // Cập nhật lại UI ngay
    updateDocCountUI(docId);
  } catch (e) {
    console.warn("Lỗi ghi Firestore counter:", e);
  }
}

// Lấy số đếm cập nhật vào UI
async function updateDocCountUI(docId) {
  if (!db || !firestoreModule) return;
  const col = APP_SETTINGS.collectionName || "stats_tv5";
  const docRef = firestoreModule.doc(db, col, docId);

  try {
    const docSnap = await firestoreModule.getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const minCount = APP_SETTINGS.hienThiToiThieu || 1;
      
      const viewEl = document.getElementById(`view-${docId}`);
      const downEl = document.getElementById(`down-${docId}`);
      
      if (viewEl && typeof data.views === "number") {
        viewEl.textContent = data.views >= minCount ? `${data.views} xem` : "–";
      }
      if (downEl && typeof data.downloads === "number") {
        downEl.textContent = data.downloads >= minCount ? `${data.downloads} tải` : "–";
      }
    }
  } catch (err) {
    console.warn("Lỗi đọc thống kê:", err);
  }
}

// Tạo thẻ HTML cho mỗi tài liệu
function renderCard(doc) {
  return `
    <div class="doc-card" id="card-${doc.id}">
      <div class="doc-header">
        <span class="doc-badge">${doc.badge}</span>
        <span class="doc-pages">${doc.pages} trang</span>
      </div>
      <h3 class="doc-title">${doc.title}</h3>
      <p class="doc-desc">${doc.desc}</p>
      
      <div class="doc-stats">
        <span class="stat-item" title="Lượt xem trực tuyến">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          <span id="view-${doc.id}">–</span>
        </span>
        <span class="stat-item" title="Lượt tải về máy">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span id="down-${doc.id}">–</span>
        </span>
      </div>

      <div class="doc-actions">
        <a href="${doc.file}" target="_blank" class="btn btn-view" onclick="recordInteraction('${doc.id}', 'view')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          Xem online
        </a>
        <a href="${doc.file}" download class="btn btn-download" onclick="recordInteraction('${doc.id}', 'download')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Tải về
        </a>
      </div>
    </div>
  `;
}

// Khởi chạy khi load trang
document.addEventListener("DOMContentLoaded", async () => {
  const listHk1 = document.getElementById("list-hk1");
  const listHk2 = document.getElementById("list-hk2");

  if (listHk1) listHk1.innerHTML = DOCS_HK1.map(renderCard).join("");
  if (listHk2) listHk2.innerHTML = DOCS_HK2.map(renderCard).join("");

  const hasFirebase = await initFirebase();
  if (hasFirebase) {
    const allDocs = [...DOCS_HK1, ...DOCS_HK2];
    for (const d of allDocs) {
      updateDocCountUI(d.id);
    }
  }
});
