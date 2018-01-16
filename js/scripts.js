$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var standing = $("select#angelo").val();
    $('.yogaposture').hide();
    if (standing === 'standing') {
      $('#posture1').show();
    } else if (standing === 'halfmoon') {
      $('#posture2').show();
    } else {
      $('#posture3').show();
    }
    event.preventDefault();
  });
});
