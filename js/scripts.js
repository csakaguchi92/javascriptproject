$(document).ready(function() {

  $("form#harrypotter").submit(function(event) {
    var skills = $("select#skills").val(); 
    var pet = $("select#pet").val(); 
    var saturday = $("select#saturday").val(); 
    var hallow = $("select#hallow").val(); 


    if (pet === "cat") {
      $('#ravenclaw').show();
    } else {
      $('#griffindor').show();
    }
    

   
  
    
    event.preventDefault();

  });
});