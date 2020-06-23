// map location
function initMap() {
  const loc = { lat: 6.524379, lng: 3.379206 };
  const map = new google.maps.Map(document.querySelector(".contact-map"), {
    center: loc,
    zoom: 14,
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}
//    sticky menu background
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// smooth scrolling

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("#green, .btn").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        },
      );
    } // End if
  });
});
