// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var textAreaEl = $('#textarea');
var pastEl = $('past');
var presentEl = $('present');
var futureEl = $('future');

// variables that grab from from html. 

var today = dayjs();
$(currentDay).text(today.format('MMM D, YYYY, h:mm'));

// Displays current date and time. Need to get hours from 12 to 24 hrs

$(function (hour) {
  var hourTimes = [
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17', 
  ];
  var hours = new date().getHours();
  
  if (hourTimes <= hours) {
    $('hour')

  }
// try to make if statement that changes time block to corresponding color. 


 textAreaEl.on('click', function(event) {
  if($(event.target).hasClass("saveBtn")){
    console.log(this);
  } 
 })

// Save input from text area into console log 

});


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
  