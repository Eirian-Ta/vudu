

  $(document).ready(function() {
    document.querySelectorAll('.addToCart').forEach(el =>
        el.addEventListener("click", event => {
          //event.preventDefault();
          console.log("Added to Cart");
          //addItem(el);
        })

      );
  })