// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Displays current date and time. Need to get hours from 12 to 24 hrs

var today = dayjs();
$(currentDay).text(today.format('MMM D, YYYY, h:mm'));


$(function (){
  var currentTime = dayjs().hour();
  $('.time-block').each(function(){
    var hourEl = $(this).attr('id').split('-')[1]
    if (currentTime == hourEl) {
      $(this).addClass('present')
    } else if (currentTime > hourEl) {
      $(this).addClass('past');
    } else if (currentTime < hourEl) {
      $(this).addClass('future');
    } 
  });
});

 textAreaEl.on('click', function(event) {
  if($(event.target).hasClass("saveBtn")){
    console.log(this);
  } 
 })

// Save input from text area into console log 
var saved = [];
$('.saveBtn').on('click', function(){
  
  for (var i = 0; i < 9 ;i++) {
    var saved = $('#container').children().eq(i).children().eq(1).val();
    
    saved.push(saved);
    localStorage.setItem('saved',JSON.stringify(saved));
  }
  
  
})

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  