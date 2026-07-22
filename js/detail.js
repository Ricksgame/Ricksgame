// モーダル関連の要素を取得
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const close = document.getElementById("close");

// 拡大表示したい画像を取得
const images = document.querySelectorAll(".images img, .hero-image");

// 画像をクリックしたとき
images.forEach(image => {

    image.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = image.src;

        modalImg.alt = image.alt;

    });

});

// ×ボタン
close.addEventListener("click", closeModal);

// 背景クリック
modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        closeModal();

    }

});

// Escキー
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeModal();

    }

});

// 閉じる処理
function closeModal(){

    modal.style.display = "none";

}