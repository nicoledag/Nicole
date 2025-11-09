// Modal logic for enlarging images in .mobile-image
document.addEventListener("DOMContentLoaded", function () {
  // Select all images inside .mobile-image
  document.querySelectorAll(".mobile-image img").forEach(function (img) {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      document.getElementById("imgModal").style.display = "block";
      document.getElementById("imgModalImg").src = this.src;
      document.getElementById("imgModalImg").alt = this.alt;
    });
  });

  // Close modal when clicking the close button
  document.querySelector(".img-modal-close").onclick = function () {
    document.getElementById("imgModal").style.display = "none";
  };

  // Close modal when clicking outside the image
  document.getElementById("imgModal").onclick = function (e) {
    if (e.target === this) this.style.display = "none";
  };
});
