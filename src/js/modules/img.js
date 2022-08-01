const imgOneError = () => {
  document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll('img').forEach(function(img){
      img.onerror = function(){this.style.display='none';};
    });
  });
};

export default imgOneError;
