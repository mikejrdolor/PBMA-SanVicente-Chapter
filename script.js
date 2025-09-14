// ✅ Image Lightbox
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// ✅ Auto-close welcome popup after 10 seconds
setTimeout(() => {
  document.getElementById('welcome-popup').style.display = 'none';
}, 10000);
