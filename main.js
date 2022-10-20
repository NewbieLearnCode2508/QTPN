const nameInput = document.getElementById("name-input");
const submitBtn = document.querySelector(".btn-submit");
const showFirst = document.querySelector(".show-first");
let namePers = "";

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
      audio.play();
      audio.onended = () => {
        audio.play();
      };
    }
  };
})();
