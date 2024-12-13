document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("downloadBtn");
  
    downloadBtn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "https://drive.google.com/uc?export=download&id=1rbhuXRRx8ZcVnlM5C7Plce2KjVZuKYTo";
      link.download = "PatitasEnCasaApp.apk";
      link.click();
  
      setTimeout(() => {
        alert("¡Gracias por descargar PatitasEnCasaApp! Esperamos que disfrutes de nuestra aplicación.");
      }, 500);
    });
  });
  