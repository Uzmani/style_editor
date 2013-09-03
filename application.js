$(document).ready(function(){
  $('#style_editor').submit(function(e){
    e.preventDefault();
    var selector = $('#style_editor input').first().val();
    var property =  $('#style_editor input').eq(1).val();
    var value = $('#style_editor input').eq(2).val();
    console.log(value);
    $(selector).css(property, value);

  });

});