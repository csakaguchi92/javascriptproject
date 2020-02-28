$(document).ready(function() {
  $("form#harrypotter").submit(function(event) {
    $('#slytherin').hide();
    $('#hufflepuff').hide();
    $('#griffindor').hide();
    $('#ravenclaw').hide();

    
  
    if (skills === "info" && saturday === "library") {
      $('#ravenclaw').show();
    } 

    if (skills === "info" && saturday === "forest") {
      $('#slytherin').show();
    } 

    if (skills === "info" && saturday === "kitchen") {
      $('#hufflepuff').show();
    } 

    if (skills === "info" && saturday === "room") {
      $('#griffindor').show();
    } 
  
    if (skills === "friends" && saturday === "library") {
      $('#hufflepuff').show();
    } 

    if (skills === "friends" && saturday === "forest") {
      $('#slytherin').show();
    } 

    if (skills === "friends" && saturday === "kitchen") {
      $('#griffindor').show();
    } 

    if (skills === "friends" && saturday === "room") {
      $('#ravenclaw').show();
    } 

    if (skills === "want" && saturday === "library") {
      $('#ravenclaw').show();
    } 

    if (skills === "want" && saturday === "forest") {
      $('#slytherin').show();
    } 

    if (skills === "want" && saturday === "kitchen") {
      $('#hufflepuff').show();
    } 

    if (skills === "want" && saturday === "room") {
      $('#griffindor').show();
    } 

    if (skills === "secrets" && saturday === "library") {
      $('#griffindor').show();
    } 

    if (skills === "secrets" && saturday === "forest") {
      $('#slytherin').show();
    } 

    if (skills === "secrets" && saturday === "kitchen") {
      $('#ravenclaw').show();
    } 

    if (skills === "secrets" && saturday === "room") {
      $('#hufflepuff').show();
    } 


    event.preventDefault();

  });
});