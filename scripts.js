document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("downloadBtn");
  
    downloadBtn.addEventListener("click", () => {
      window.location.href = "https://drive.google.com/uc?export=download&id=1rbhuXRRx8ZcVnlM5C7Plce2KjVZuKYTo";
  
      setTimeout(() => {
        alert("¡Gracias por descargar PatitasEnCasaApp! Esperamos que disfrutes de nuestra aplicación.");
      }, 500);
    });
  });
  