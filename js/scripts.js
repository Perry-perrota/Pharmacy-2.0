
$(document).ready(function() {

  $("#button").click(function() {
    var name = $("input#yname").val();
    var email = $("input#yemail").val();
    var text = $("input#inmessage").val();
    alert("Thanks "+name+" for reaching us");
  });
});
