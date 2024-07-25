$(document).ready(function () {

    // Loader
  setTimeout(function () {
    $("#loading-spinner").addClass("d-none");
    $("#main-content").removeClass("d-none");
  }, 900);

  
  // Dark & Light mode
  $("#light-mode-icon").click(function () {
    $(this).addClass("d-none");
    $("#dark-mode-icon").removeClass("d-none");
  });

  $("#dark-mode-icon").click(function () {
    $(this).addClass("d-none");
    $("#light-mode-icon").removeClass("d-none");
  });
});
