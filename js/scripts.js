
$(document).ready(function () {
  
  $("#result-button").click(function () {
    var food = $("input:radio[name=food]:checked").val();
    var music = $("input:radio[name=music]:checked").val();
      if (food === "Mexican" && music === "Rock" || music === "EDM") {
      $("#santapic").show();
      $("#buddypic").hide();
      $("#rudolphpic").hide();
     
    } else if (food ==="Vegetarian" && music == "Rap") {
      $("#buddypic").show();
      $("#santapic").hide();
      $("#rudolphpic").hide();
    } else {
      $("#rudolphpic").show();
      $("#santapic").hide();
      $("#buddypic").hide();
    }
    event.preventDefault();
  });
});


