const nameInput = document.getElementById("name-input");
const submitBtn = document.querySelector(".btn-submit");
const showFirst = document.querySelector(".show-first");
const message = document.querySelector(".message-text");
let namePers = "";

const loiChuc = [
  "NHÂN QUỐC TẾ PHỤ NỮ CHÚC BẠN LUÔN VUI VẺ VÀ KHÔNG BỊ RỚT MÔN :))",
  "Không có gì ngoài tấm lòng của một chàng trai IT, chúc 20/10 vui vẻ",
  "Ngày 20/10 chúc bạn và một nửa thế giới luôn thành công trong cuộc sống! Chúc bạn luôn duyên dáng và xinh đẹp trong mắt một nửa thế giới còn lại.",
  "Dù bạn ở đâu, làm gì đi chăng nữa, tui cũng luôn chúc cho bạn những điều tốt đẹp nhất trong ngày 20/10 này. Bạn luôn là người bạn tốt trong tim tui",
  "Hãy cùng tận hưởng ngày của phụ nữ, ngày của phái đẹp. Hôm nay, mình chúc cho bạn sẽ là cô gái xinh đẹp nhất"
];
(function () {
  submitBtn.onclick = () => {
    namePers = nameInput.value.trim();
    if (!namePers) {
      alert("Nhập tên vào mới được đi tiếp nha gái :)");
    } else {
      showFirst.remove();
      document.querySelector(".message-warp").style.display = "block";
      const audio = document.getElementById("music");
      document.querySelector(".name").innerHTML = namePers;
      message.textContent = loiChuc[Math.floor(Math.random() * loiChuc.length)];
      audio.play();
      audio.onended = () => {
        audio.play();
      };
    }
  };
})();
