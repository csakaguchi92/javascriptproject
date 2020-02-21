$(document).ready(function() {

  $("form#harrypotter").submit(function(event) {
    var skills = $("select#skills").val(); 
    var pet = $("select#pet").val(); 
    var saturday = $("select#saturday").val(); 
    var hallow = $("select#hallow").val(); 


    
    
    if (skills === "info" && pet === "owl" && saturday === "library" && hallow === "wand") {
      $('#griffindor').show();
    } 
   
    if (skills === "friends" && pet === "owl" && saturday === "library" && hallow === "wand") {
      $('#griffindor').show();
    } 

    if (skills === "secrets" && pet === "owl" && saturday === "library" && hallow === "wand") {
      $('#griffindor').show();
    } 
    
    if (skills === "want" && pet === "owl" && saturday === "library" && hallow === "wand") {
      $('#slytherin').show();
    } 
    
    if (skills === "want" && pet === "owl" && saturday === "library" && hallow === "wand") {
      $('#slytherin').show();
    } 
    
   


  
    
    event.preventDefault();

  });
});