// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  // TODO: Add code to display the current date in the header of the page.

  //get current date from day.js
  var today = dayjs();
  console.log(today);
  //format day object to string
  var formattedToday = today.format('dddd MMM D, YYYY, hh:mm a')
  console.log(formattedToday);
  //insert string into HTML
  var currentDayEl = $('#currentDay')
  currentDayEl.text(formattedToday)
 


  // *** color each timeblock ***
  // reach into the html and grab your timeblock(s) $()
  // for each time block
  for (var i = 9; i < 18; i++){
    // -- ** compare the time the block represents with the time of the current hour
    var currentTime = dayjs().hour();
    var timeBlockTime = i;
    // -- if time block time < current time
    if(timeBlockTime < currentTime){
      // -- -- add the past class to that element
      $('#hour-'+i).addClass('past')
    }
    // -- if time block time is equal current time
    if(timeBlockTime === currentTime){
      // -- -- add the present class to that element
      $('#hour-'+i).addClass('present')
    }
    // -- if time block time > current time
    if(timeBlockTime > currentTime){
      $('#hour-'+i).addClass('future')
    }
    // -- -- add the future class to that element
  }

  // listen for button click
  // -- grab the textarea dn is valude 
  // -- set to local storag
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings("textarea").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
    console.log(value);
  });
  
  //retrieves items from local storage and sets them in proper places
  $("#hour-9 textarea").val(localStorage.getItem("9"));
  $("#hour-10 textarea").val(localStorage.getItem("10"));
  $("#hour-11 textarea").val(localStorage.getItem("11"));
  $("#hour-12 textarea").val(localStorage.getItem("12"));
  $("#hour-13 textarea").val(localStorage.getItem("13"));
  $("#hour-14 textarea").val(localStorage.getItem("14"));
  $("#hour-15 textarea").val(localStorage.getItem("15"));
  $("#hour-16 textarea").val(localStorage.getItem("16"));
  $("#hour-17 textarea").val(localStorage.getItem("17"));
});
