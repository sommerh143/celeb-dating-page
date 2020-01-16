
$(document).ready(function () {
  
  $("#result-button").click(function () {
    var food = $("input:radio[name=food]:checked").val();
      if (food === "Mexican") {
      $("#santapic").show();
    } else {
      $("#santapic").hide();
    }
    event.preventDefault();
  });
});


