// loader.js
function showLoader() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    // 顯示 loader 並隱藏內容
    loader.classList.remove('hidden');
    content.classList.add('hidden');
    
    // 模擬載入過程，這裡設定為 2 秒後隱藏 loader
    setTimeout(() => {
        loader.classList.add('hidden');
        content.classList.remove('hidden');
    }, 500); // 這裡的 2000 是 2 秒，可以根據需求調整
}

// 頁面載入完成後，執行 showLoader 函式
window.addEventListener('load', showLoader);
