var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var Month = function() {
 function daysInMonth(month, year) {
   return new Date(this.year, this.month, 0).getDate(); //given a month and year, this tells how many days in the month
   console.log(daysInMonth(5, 2015)); //31 days 
 }
 
 currMonth = new Date();

 function CalMonth (month, year) {
  this.month = currMonth.getMonth();
  this.year = currMonth.getFullYear();
 }
 
 this.getWeekday = function(num) {
   var date = new Date(this.year, this.month-1, num);
   var weekdayNum = date.getDay();
   return dayNames[weekdayNum];
 }
}

 var june = new Month(6, 2015);
 june.numOfDays;//31
 june.getWeekday(14);

Month.prototype.generateHTML = function() {

 // var today = new Date();
 // var month = today.getMonth();
 // var year = today.getFullYear();

 var firstDay = new Date(this.year, this.month, 1);
 var startingDay = firstDay.getDay();

 //header with days of the week
 var html = '<table class="cal-table">';
 html += '<tr><th colspan="7">';
 html += '</th></tr>';
 html += '<tr class = "cal-header">';
  for (i=0; i<=6; i++) {
   html += '<td class="cal-header-day">';
   html += dayNames[i];
   html += '</td>';
  }
 html += '</tr><tr>';

 //fills in the dates
 var day = 1;
 //iterates thru each week - row
 for (var i = 0; i < 9; i++) {
   //iterates thru each weekday - columns
   for (var j = 0; j < 7; j++) {
     console.log("hello");
     html += '<td class="cal-day">';
     if (day < j.numOfDays && (i>0 || j>=startingDay)) {
       html += day;
       day++;
       console.log(day);
       console.log(numOfDays);
     }
     html += '</td>';
   }
   //if statement for i loop
   if (day > j.numOfDays) {
     break;
   } else {
     html += '</tr><tr>';
   }
 }
 html += '</tr></table>';
 this.html = html; 
}

Month.prototype.getHTML = function() {
 return this.html;
}