/* ==========================================
   THE GIRL I HAD DREAMED ABOUT
========================================== */


function openBook() {
  
  const cover = document.querySelector(".cover");
  
  const book = document.querySelector("#book");
  
  cover.style.display = "none";
  
  book.classList.remove("hidden");
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function goTop() {
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* ==========================================
   COVER TITLE ENTRANCE
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  const title = document.querySelector(".cover h1");
  
  if (title) {
    
    title.style.opacity = "0";
    
    title.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      
      title.style.transition = "1.2s ease";
      
      title.style.opacity = "1";
      
      title.style.transform = "translateY(0)";
      
    }, 300);
    
  }
  function saveAsPDF() {
  window.print();
}
  
});
/* ==========================================
   THE GIRL I HAD DREAMED ABOUT
========================================== */


function openBook() {
  
  const cover = document.querySelector(".cover");
  
  const book = document.querySelector("#book");
  
  cover.style.display = "none";
  
  book.classList.remove("hidden");
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function goTop() {
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* ==========================================
   COVER TITLE ENTRANCE
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  const title = document.querySelector(".cover h1");
  
  if (title) {
    
    title.style.opacity = "0";
    
    title.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      
      title.style.transition = "1.2s ease";
      
      title.style.opacity = "1";
      
      title.style.transform = "translateY(0)";
      
    }, 300);
    
  }
  function saveAsPDF() {
  window.print();
}
  
});
