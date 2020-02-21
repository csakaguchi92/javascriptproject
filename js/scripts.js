$(document).ready(function() {

  $("form#harrypotter").submit(function() {
    var skills = $("select#skills").val(); 
    var pet = $("select#pet").val(); 
    var saturday = $("select#saturday").val(); 
    var hallow = $("select#hallow").val(); 


    if (skills ==='info')  {
    } 

    $('#Ravenclaw').show();
    
    event.preventDefault();

  });
});